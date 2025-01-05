import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#f4f6f5',
        name: 'Patrick Lehmann',
        short_name: 'Patrick Lehmann',
        description:
            'Patrick Lehmann, a creative front-end dev and your designer’s favorite programmer. With 7+ years crafting impactful products. Stay bold and say hi!',
        start_url: '/',
        display: 'fullscreen',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        lang: 'en',
        theme_color: '#f4f6f5',
    };
}
