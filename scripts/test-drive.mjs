import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually
const envPath = resolve(__dirname, '../.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const env = {};
for (const line of envContent.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
        env[match[1].trim()] = match[2].trim().replace(/^"(.*)"$/, '$1');
    }
}

const FOLDER_ID = '1YnM2l1Mj99pdFN6Q-VJTB6bgvw2LDHHK';

async function main() {
    console.log('Client email:', env.GOOGLE_SHEETS_CLIENT_EMAIL);
    console.log('Private key starts with:', env.GOOGLE_SHEETS_PRIVATE_KEY?.substring(0, 40));

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: [
            'https://www.googleapis.com/auth/drive.readonly',
        ],
    });

    const drive = google.drive({ version: 'v3', auth });

    try {
        console.log('\nTesting Drive API access...');
        const res = await drive.files.list({
            q: `'${FOLDER_ID}' in parents and trashed = false`,
            fields: 'files(id, name)',
            pageSize: 5,
        });
        console.log('SUCCESS! Files found:', res.data.files?.length);
        console.log('First 5 files:', res.data.files?.map(f => `${f.name} -> ${f.id}`));
    } catch (err) {
        console.error('\nERROR:', err.message);
        console.error('Status:', err.status || err.code);
        if (err.errors) {
            console.error('Details:', JSON.stringify(err.errors, null, 2));
        }
    }
}

main();
