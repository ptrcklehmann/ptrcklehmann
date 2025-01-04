"use client";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { TitleAnimated } from './title';
import { LoadingGrid } from './loading-gtid';
import { LoadingScreen } from './styled';

export const reviewDuration = 1;

export const InitialTransition = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <LoadingScreen
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <LoadingGrid />
                    <TitleAnimated />
                </LoadingScreen>
            )}
        </AnimatePresence>
    );
};
