import React from 'react';

import { useCursorContext } from '@/hooks/useCursorContext';
import { PreviewCard } from './preview-card';
import { PreviewLink } from './styled';
import { LinkProps } from 'next/link';

type HoverPreviewLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    label: string;
};

export function HoverPreviewLink({ label, ...props }: HoverPreviewLinkProps) {
    const { setPreviewTarget, isHovering, linkData, coords } = useCursorContext();

    const handleMouseEnter = () => {
        if (props.href) {
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
            {isHovering && linkData && <PreviewCard linkPreviewData={linkData} coords={coords} />}
        </>
    );
}
