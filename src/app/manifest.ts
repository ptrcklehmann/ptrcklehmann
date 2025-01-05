import type { MetadataRoute } from 'next';
import { useMode } from 'nextjs-darkmode/hooks';

export default function useManifest(): MetadataRoute.Manifest {
    const { resolvedMode } = useMode();

    const themeColor = resolvedMode === 'dark' ? '#1a202c' : '#f4f6f5';
    return {
        name: 'Patrick Lehmann',
        short_name: 'ptrcklehmann',
        description:
            'Patrick Lehmann, a creative front-end dev and your designer’s favorite programmer. With 7+ years crafting impactful products. Stay bold and say hi!',
        start_url: '/',
        display: 'standalone',
        background_color: themeColor,
        theme_color: themeColor,
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
