import { getLinkPreview } from 'link-preview-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    try {
        const data = await getLinkPreview(url, {
            followRedirects: 'follow',
            headers: {
                'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
            },
            timeout: 10000,
        });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to fetch link preview: ${error}` },
            { status: 500 },
        );
    }
}
