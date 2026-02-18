import { google } from 'googleapis';
import { Product, Category } from '@/types';

interface GSheetCell {
    v: string | number | null;
    f?: string;
}

interface GSheetRow {
    c: (GSheetCell | null)[];
}

interface GSheetResponse {
    table: {
        cols: { id: string; label: string; type: string }[];
        rows: GSheetRow[];
    };
}

export async function appendLeadToSheet(lead: {
    date: string;
    name: string;
    lastName: string;
    whatsapp: string;
    country: string;
    email: string;
}) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: 'Hoja 1!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [lead.date, lead.name, lead.lastName, lead.whatsapp, lead.country, lead.email],
                ],
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error appending to Google Sheets:', error);
        throw error;
    }
}

/**
 * Extracts the Google Drive FILE_ID from a Drive sharing URL.
 *
 * Handles formats like:
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/uc?id=FILE_ID&export=view
 *   FILE_ID (raw, no URL)
 */
export function extractDriveFileId(value: string): string | null {
    if (!value) return null;

    // Format: https://drive.google.com/file/d/FILE_ID/view
    const fileMatch = value.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return fileMatch[1];

    // Format: https://drive.google.com/uc?id=FILE_ID
    const ucMatch = value.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (ucMatch) return ucMatch[1];

    // Raw FILE_ID (alphanumeric, no slashes or dots)
    if (/^[a-zA-Z0-9_-]{25,}$/.test(value.trim())) return value.trim();

    return null;
}

/**
 * Builds a local proxy URL to fetch the image securely from the server.
 * Avoids CORS and referrer blocking issues with direct Drive links.
 */
export function buildDriveImageUrl(fileId: string): string {
    return `/api/images/${fileId}`;
}

/**
 * Maps a raw category string from the sheet to the Category type.
 */
function mapCategory(raw: string): Category {
    const lower = raw.toLowerCase();
    if (lower.includes('pared')) return 'decoracion_pared';
    if (lower.includes('mesa')) return 'decoracion_mesa';
    if (lower.includes('personal')) return 'uso_personal';
    return 'avanzado'; // catches "hogar", "avanzado", etc.
}

/**
 * Fetches products from the public Google Sheet using the Visualization API.
 * Column E contains Google Drive sharing URLs — the FILE_ID is extracted from them.
 * Revalidates every 30 seconds.
 */
export async function fetchProductsFromGSheet(): Promise<Product[]> {
    const SHEET_ID = '1LOBkTghV-y0gT7_wxo_qLJHA0tWb9gcirRMffPtVueg';
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

    try {
        const sheetResponse = await fetch(url, { next: { revalidate: 30 } });

        if (!sheetResponse.ok) {
            throw new Error(`Failed to fetch sheet: ${sheetResponse.status}`);
        }

        const text = await sheetResponse.text();

        // Strip the JSONP wrapper: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
        const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
        const data: GSheetResponse = JSON.parse(jsonString);

        return data.table.rows
            .filter(row => row.c[0]?.v) // Skip rows without a product name
            .map((row, index) => {
                const name = row.c[0]?.v?.toString().trim() || 'Producto sin nombre';
                const description = row.c[1]?.v?.toString().trim() || '';

                // Price: may come as number or formatted string like "90,000"
                let price = 0;
                const rawPrice = row.c[2]?.v;
                if (typeof rawPrice === 'number') {
                    price = rawPrice;
                } else if (typeof rawPrice === 'string') {
                    price = parseFloat(rawPrice.replace(/[^0-9.-]+/g, '')) || 0;
                }

                const categoryRaw = row.c[3]?.v?.toString() || '';
                const category = mapCategory(categoryRaw);

                // Column E: Google Drive sharing URL or FILE_ID
                const colE = row.c[4]?.v?.toString().trim() || '';
                const fileId = extractDriveFileId(colE);
                const imageUrl = fileId ? buildDriveImageUrl(fileId) : '';

                const slug = name
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '') // Remove accents
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');

                return {
                    id: `gsheet-${index}`,
                    name,
                    slug,
                    description,
                    price,
                    category,
                    image_url: imageUrl ? [imageUrl] : [],
                    production_time_days: 7,
                    is_featured: false,
                    is_active: true,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                };
            });
    } catch (error) {
        console.error('Error fetching products from Google Sheet:', error);
        return [];
    }
}
