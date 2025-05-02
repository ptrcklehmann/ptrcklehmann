/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const contentType = 'image/png';

const RESUME_OG_DATA = {
    name: 'Patrick Lehmann',
    about: 'Frontend Developer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/32590221?v=4',
    personalWebsiteUrl: 'https://ptrcklehmann.com',
} as const;

export const alt = 'Patrick Lehmann - Frontend Developer';
export const size = {
    width: 1200,
    height: 630,
};

export default async function Image() {
    const fontData = await fetch(
        new URL('../assets/fonts/Geomanist-Medium.woff', import.meta.url),
    ).then(res => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Geomanist, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={RESUME_OG_DATA.avatarUrl}
                        alt={RESUME_OG_DATA.name}
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            marginBottom: '2rem',
                        }}
                    />
                    <div
                        style={{
                            fontSize: '3rem',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            color: '#12191f',
                            marginBottom: '0.8rem',
                        }}
                    >
                        {RESUME_OG_DATA.name}
                    </div>
                    <div
                        style={{
                            fontSize: '1.5rem',
                            color: '#737373',
                            maxWidth: '600px',
                            lineHeight: '1.4',
                        }}
                    >
                        {RESUME_OG_DATA.about}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '2rem',
                            gap: '1rem',
                        }}
                    >
                        <div style={{ fontSize: '1.2rem', color: '#737373' }}>
                            {RESUME_OG_DATA.personalWebsiteUrl.slice(8)}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    data: fontData,
                    name: 'Geomanist Bold',
                    style: 'normal',
                    weight: 700,
                },
            ],
        },
    );
}
