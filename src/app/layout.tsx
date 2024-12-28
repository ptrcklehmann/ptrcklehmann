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
            "I'm Patrick Lehmann, a creative Developer and your designer's favourite programmer. I create digital experiences with React Native and Next.js",
        category: 'development',
        openGraph: {
            siteName: 'Patrick Lehmann',
            url: 'https://ptrcklehmann.com',
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
                    <GlobalStyles />
                    <Core />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
