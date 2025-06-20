import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#f4f6f5',
        name: 'Patrick Lehmann - Frontend Developer',
        short_name: 'Patrick Lehmann',
        description:
            "Patrick Lehmann, a creative front-end dev and your designer's favorite programmer. With 7+ years crafting impactful products. Stay bold and say hi!",
        start_url: '/',
        display: 'fullscreen',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        lang: 'en',
        theme_color: '#679d65',
    };
}
