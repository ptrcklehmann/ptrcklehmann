'use client';
import { useRef, useCallback } from 'react';
import { SpringOptions, useSpring, Variants } from 'framer-motion';
import { useCursorContext } from '@/hooks/useCursorContext';
import { PreviewLink, CirclePreview } from './styled';

interface HoverPreviewLinkProps {
    href: string;
    label: string;
    previewText: string;
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

const springConfig: SpringOptions = {
    bounce: 0.04,
};

export const HoverPreviewLink = ({ href, label, previewText }: HoverPreviewLinkProps) => {
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

    // Use `useTransform` only if necessary for additional transformations
    const previewX = useSpring(x, springConfig);
    const previewY = useSpring(y, springConfig);

    const isCurrentTarget = previewTarget === href;

    const handleMouseEnter = useCallback(() => {
        setPreviewTarget(href);
        animatePreview('cursorEnter');
    }, [href, setPreviewTarget, animatePreview]);

    const handleMouseLeave = useCallback(() => {
        animatePreview('cursorLeave');
        const timeoutId = setTimeout(() => {
            if (previewTarget === href) {
                setPreviewTarget(null);
            }
        }, 200);
        return () => clearTimeout(timeoutId);
    }, [href, previewTarget, setPreviewTarget, animatePreview]);

    return (
        <>
            <PreviewLink
                ref={ref}
                href={href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {label}
            </PreviewLink>
            {isHovering && isCurrentTarget && (
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
            )}
        </>
    );
};
