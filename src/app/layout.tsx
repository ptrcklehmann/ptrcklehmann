import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
                    <Analytics />
                    <SpeedInsights />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
