'use client';
import { useState, MouseEvent } from 'react';
import { useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

import { FloatingCirclePreview, GradientTextLink } from './styled';
import { CIRCLE_PREVIEW_RADIUS } from '@/lib/constants';

interface HoverPreviewLinkProps {
    href: string;
    label: string;
    previewText: string;
}

export const InteractivePreviewLink = ({ href, label, previewText }: HoverPreviewLinkProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

    const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX - CIRCLE_PREVIEW_RADIUS);
        mouseY.set(e.clientY - CIRCLE_PREVIEW_RADIUS);
    };

    return (
        <>
            <GradientTextLink
                href={href}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {label}
            </GradientTextLink>
            <AnimatePresence>
                {isHovering && (
                    <FloatingCirclePreview
                        style={{
                            left: springX,
                            top: springY,
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {previewText}
                    </FloatingCirclePreview>
                )}
            </AnimatePresence>
        </>
    );
};
