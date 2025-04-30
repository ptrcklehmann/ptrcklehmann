'use client';
import { useRef } from 'react';
import { useTransform, Variants } from 'framer-motion';
import { useCursorContext } from '@/hooks/useCursorContext';
import { PreviewLink, CirclePreview } from './styled';

interface HoverPreviewLinkProps {
    href: string;
    label: string;
    previewText: string;
    title?: string;
}

const variants: Variants = {
    cursorEnter: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    cursorLeave: {
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export const HoverPreviewLink = ({ href, label, previewText, title }: HoverPreviewLinkProps) => {
    const {
        x,
        y,
        setPreviewTarget,
        isHovering,
        previewTarget,
        initialPreviewVariant,
        animatePreviewVariant,
        animatePreview,
    } = useCursorContext();
    const ref = useRef<HTMLAnchorElement>(null);

    // // Create derived motion values for the preview position
    const previewX = useTransform(x, latest => latest);
    const previewY = useTransform(y, latest => latest);

    const isCurrentTarget = previewTarget === href;

    const handleMouseEnter = () => {
        setPreviewTarget(href);
        animatePreview('cursorEnter');
    };

    const handleMouseLeave = () => {
        animatePreview('cursorLeave');
        const timeoutId = setTimeout(() => {
            if (previewTarget === href) {
                setPreviewTarget(null);
            }
        }, 200);
        return () => clearTimeout(timeoutId);
    };

    return (
        <>
            <PreviewLink
                ref={ref}
                href={href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                title={title}
            >
                {label}
                {isHovering && isCurrentTarget ? (
                    <CirclePreview
                        style={{
                            left: previewX,
                            top: previewY,
                        }}
                        variants={variants}
                        initial={initialPreviewVariant}
                        animate={animatePreviewVariant}
                    >
                        {previewText}
                    </CirclePreview>
                ) : null}
            </PreviewLink>
        </>
    );
};
