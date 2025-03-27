import { MainContainer } from '../components/main';

export function generateViewport() {
    return {
        themeColor: [
            { media: '(prefers-color-scheme: dark)', color: '#252728' },
            { media: '(prefers-color-scheme: light)', color: '#f4f6f5' },
        ],
    };
}
export default function IndexRoute() {
    return <MainContainer />;
}
