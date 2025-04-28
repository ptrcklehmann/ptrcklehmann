import React, { MouseEvent, useCallback, useEffect, useState } from 'react';

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
    const [state, setState] = useState({
        coords: { x: 0, y: 0 },
        showPreview: false,
        linkData: null as LinkPreview | null,
    });

    const fetchLinkData = useCallback(async () => {
        if (!props.href) return;

        try {
            const response = await fetch(`/api/link-preview?url=${props.href}`);
            const data = await response.json();
            setState(prevState => ({ ...prevState, linkData: data }));
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Failed to fetch link preview:', err);
        }
    }, [props.href]);

    useEffect(() => {
        if (state.showPreview) {
            fetchLinkData();
        }
    }, [fetchLinkData, state.showPreview]);

    const handleMouseEnter = () => {
        setState(prevState => ({ ...prevState, showPreview: true }));
    };

    const handleMouseMove = (e: MouseEvent) => {
        setState(prevState => ({ ...prevState, coords: { x: e.clientX, y: e.clientY } }));
    };

    const handleMouseLeave = () => {
        setState(prevState => ({ ...prevState, showPreview: false }));
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
            {state.showPreview && state.linkData && (
                <PreviewCard linkPreviewData={state.linkData} coords={state.coords} />
            )}
        </>
    );
}
