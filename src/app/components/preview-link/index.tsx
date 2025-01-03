import React, { MouseEvent, useState } from 'react';

import { PreviewCard } from './preview-card';
import { PreviewLink } from './styled';

export type LinkPreview = {
    url: string;
    title: string;
    siteName: string;
    description: string;
    images: string[];
    mediaType: string;
    contentType: string;
    charset: string;
    videos: string[];
    favicons: string[];
};

type HoverPreviewLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    label: string;
};

export function HoverPreviewLink({ label, ...props }: HoverPreviewLinkProps) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [showPreview, setShowPreview] = useState(false);
    const [linkData, setLinkData] = useState<LinkPreview | null>(null);

    const handleMouseEnter = async () => {
        if (!props.href) return;
        setShowPreview(true);
        try {
            const response = await fetch(`/api/link-preview?url=${props.href}`);
            const data = await response.json();
            setLinkData(data);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Failed to fetch link preview:', err);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setShowPreview(false);
    };

    if (!props.href) {
        return <span>{label}</span>;
    }

    return (
        <>
            <PreviewLink
                href={props.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                {...props}
            >
                {label}
            </PreviewLink>
            {showPreview && linkData ? <PreviewCard linkData={linkData} coords={coords} /> : null}
        </>
    );
}
