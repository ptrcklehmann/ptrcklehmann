import React from 'react';

import { useCursorContext } from '@/hooks/useCursorContext';
import { PreviewCard } from './preview-card';
import { PreviewLink } from './styled';

type HoverPreviewLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    label: string;
    previewText: string;
};

export function HoverPreviewLink({ label, previewText, ...props }: HoverPreviewLinkProps) {
    const { setPreviewTarget, isHovering, linkData, coords } = useCursorContext();

    const handleMouseEnter = () => {
        if (props.href && props.href !== 'mailto:connect@ptrcklehmann.com?Subject=Hello') {
            setPreviewTarget(props.href);
        }
    };

    const handleMouseLeave = () => {
        setPreviewTarget(null);
    };

    return (
        <>
            <PreviewLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
                {label}
            </PreviewLink>
            {isHovering && linkData && (
                <PreviewCard previewText={previewText} linkPreviewData={linkData} coords={coords} />
            )}
        </>
    );
}
