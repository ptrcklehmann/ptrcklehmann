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
                <PreviewCard label={label} linkPreviewData={linkData} coords={coords} />
            )}
        </>
    );
}
