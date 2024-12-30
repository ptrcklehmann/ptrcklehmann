import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Core } from 'nextjs-darkmode';

import { GlobalStyles } from '@/styles/global';

import StyledComponentsRegistry from '../lib/registry';

const geomanist = localFont({
    src: [
        {
            path: '../assets/fonts/Geomanist-Regular.woff',
            weight: '400',
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
            images: [
                {
                    url: '/apple-icon.png',
                    width: 180,
                    height: 180,
                    alt: 'Patrick Lehmann',
                },
            ],
        },
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
                    <GlobalStyles />
                    <Core />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
