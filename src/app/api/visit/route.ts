import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies();
    const visited = cookieStore.get('visited');

    if (!visited) {
        const response = NextResponse.json({ message: 'Nice to see you!' });
        response.cookies.set('visited', 'true', {
            path: '/',
            maxAge: 31536000, // 1 year
        });
        return response;
    }

    return NextResponse.json({ message: 'See you soon.' });
}
