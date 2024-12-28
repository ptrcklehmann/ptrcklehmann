import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Core } from 'nextjs-darkmode';

import { GlobalStyles } from '@/styles/global';

import StyledComponentsRegistry from '../lib/registry';

const polysans = localFont({
    src: [
        {
            path: '../assets/fonts/PolySans-Slim.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/PolySans-MedianWide.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--polysans' as const,
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
            <body className={polysans.className}>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    <Core />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
