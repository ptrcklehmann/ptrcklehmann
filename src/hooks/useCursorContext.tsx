"use client";
import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode } from 'react';

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

type CursorContextType = {
    coords: { x: number; y: number };
    setCoords: (coords: { x: number; y: number }) => void;
    previewTarget: string | null;
    setPreviewTarget: (url: string | null) => void;
    linkData: LinkPreview | null;
    isHovering: boolean;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursorContext = () => {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error('useCursorContext must be used within a CursorProvider');
    }
    return context;
};

interface CursorProviderProps {
    children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [previewTarget, setPreviewTarget] = useState<string | null>(null);
    const [linkData, setLinkData] = useState<LinkPreview | null>(null);

    const isHovering = Boolean(previewTarget);

    // Track mouse position globally
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Fetch link data when hovering
    useEffect(() => {
        if (!previewTarget) {
            setLinkData(null);
            return;
        }

        const fetchLinkData = async () => {
            try {
                const response = await fetch(`/api/link-preview?url=${previewTarget}`);
                const data = await response.json();
                setLinkData(data);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error('Failed to fetch link preview:', err);
                setLinkData(null);
            }
        };

        fetchLinkData();
    }, [previewTarget]);

    return (
        <CursorContext.Provider
            value={{
                coords,
                setCoords,
                previewTarget,
                setPreviewTarget,
                linkData,
                isHovering
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};