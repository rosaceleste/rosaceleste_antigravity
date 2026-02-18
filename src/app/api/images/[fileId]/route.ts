import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ fileId: string }> }
) {
    const { fileId } = await context.params;

    if (!fileId) {
        return new NextResponse('Missing file ID', { status: 400 });
    }

    const driveUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

    try {
        const response = await fetch(driveUrl);

        if (!response.ok) {
            console.error(`Failed to fetch Drive image ${fileId}: ${response.status}`);
            return new NextResponse('Failed to fetch image', { status: response.status });
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream';
        const buffer = await response.arrayBuffer();

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error fetching image:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
