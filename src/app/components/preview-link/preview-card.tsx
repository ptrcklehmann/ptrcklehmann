/* eslint-disable @next/next/no-img-element */

import { LinkPreview } from '@/hooks/useCursorContext';
import { FavIcon, FloatingLinkCard, PreviewTitle } from './styled';
import { useMemo } from 'react';

export const PreviewCard = ({
    label,
    linkPreviewData,
    coords,
}: {
    label: string;
    linkPreviewData: LinkPreview;
    coords: { x: number; y: number };
}) => {
    const { favicons, title, url } = linkPreviewData;

    const customTitle = useMemo(() => {
        if (label === 'drop me a line') {
            return 'Say Hello';
        } else if (url.includes('github.com')) {
            return 'GitHub';
        } else {
            return title || 'Visit';
        }
    }, [label, url, title]);

    return (
        <FloatingLinkCard
            style={{
                top: coords.y,
                left: coords.x,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
        >
            {favicons && favicons[0] ? <FavIcon src={favicons[0]} alt={customTitle} /> : null}
            <PreviewTitle>{customTitle}</PreviewTitle>
        </FloatingLinkCard>
    );
};
