import { FloatingLinkCard, PreviewTitle } from './styled';

export const PreviewCard = ({
    previewText,
    coords,
}: {
    previewText?: string;
    coords: { x: number; y: number };
}) => {
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
            <PreviewTitle>{previewText}</PreviewTitle>
        </FloatingLinkCard>
    );
};
