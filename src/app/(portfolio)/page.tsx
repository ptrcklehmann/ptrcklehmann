import { Metadata } from 'next';
import { MainContainer } from '../components/main';

export function generateViewport() {
    return {
        themeColor: [
            { media: '(prefers-color-scheme: dark)', color: 'rgb(18, 25, 31)' },
            { media: '(prefers-color-scheme: light)', color: 'rgb(244, 246, 245)' },
        ],
    };
}

const RESUME_OG_DATA = {
    name: 'Patrick Lehmann',
    about: 'Frontend Developer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/32590221?v=4',
    personalWebsiteUrl: 'https://ptrcklehmann.com',
} as const;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `${RESUME_OG_DATA.name} - Frontend Developer`,
        description: RESUME_OG_DATA.about,
        openGraph: {
            title: `${RESUME_OG_DATA.name} - Frontend Developer`,
            description: RESUME_OG_DATA.about,
            type: 'website',
            locale: 'en_GB',
            siteName: 'Patrick Lehmann - Frontend Developer',
            url: 'https://ptrcklehmann.com',
            images: [
                {
                    url: 'https://ptrcklehmann.com/opengraph-image',
                    width: 1200,
                    height: 630,
                    alt: `${RESUME_OG_DATA.name}'s profile picture`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${RESUME_OG_DATA.name} - Frontend Developer`,
            site: '@patrico',
            creator: '@patrico',
            description: RESUME_OG_DATA.about,
            images: ['https://ptrcklehmann.com/opengraph-image'],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function IndexRoute() {
    return <MainContainer />;
}
