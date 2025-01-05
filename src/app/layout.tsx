import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Core } from 'nextjs-darkmode';

import { GlobalStyles } from '@/styles/global';

import StyledComponentsRegistry from '../lib/registry';
import media from 'styled-media-query';

const geomanist = localFont({
    src: [
        {
            path: '../assets/fonts/Geomanist-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Geomanist-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Geomanist-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--geomanist' as const,
});

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Patrick Lehmann',
        description:
            'Patrick Lehmann, a creative front-end dev and your designer’s favorite programmer. With 7+ years crafting impactful products. Stay bold and say hi!',
        category: 'development',
        openGraph: {
            title: 'Patrick Lehmann',
            siteName: 'Patrick Lehmann',
            url: 'https://ptrcklehmann.com',
            type: 'website',
            description:
                'Patrick Lehmann, a creative front-end dev and your designer’s favorite programmer. With 7+ years crafting impactful products. Stay bold and say hi!',
        },
        themeColor: [
            { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
            { media: '(prefers-color-scheme: light)', color: '#f4f6f5' },
        ],
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={geomanist.className}>
                <StyledComponentsRegistry>
                    <Analytics />
                    <SpeedInsights />
                    <GlobalStyles />
                    <Core />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
