/* eslint-disable @next/next/no-img-element */

import { LinkPreview } from '@/hooks/useCursorContext';
import { FavIcon, FloatingLinkCard, PreviewTitle } from './styled';

export const PreviewCard = ({
    previewText,
    linkPreviewData,
    coords,
}: {
    previewText?: string;
    linkPreviewData: LinkPreview;
    coords: { x: number; y: number };
}) => {
    const { favicons } = linkPreviewData;
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
            {favicons && favicons[0] ? <FavIcon src={favicons[0]} alt={previewText} /> : null}
            <PreviewTitle>{previewText}</PreviewTitle>
        </FloatingLinkCard>
    );
};
