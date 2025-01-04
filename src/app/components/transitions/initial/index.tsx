"use client";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Row } from './row';
import { Backdrop, InitialContainer } from './styled';
import { TitleAnimated } from './title';

const rows = [1, 2, 3, 4, 5];
export const reviewDuration = 1;

export const InitialTransition = () => {
    const [hasFinishedAnimating, setHasFinishedAnimating] = useState(false);
    const [isHalfway, setIsHalfway] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasFinishedAnimating(true);
        }, 2000);
        const halfwayTimer = setTimeout(() => {
            setIsHalfway(true);
        }, 1800);
        return () => {
            clearTimeout(timer);
            clearTimeout(halfwayTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {!hasFinishedAnimating && (
                <>
                    <InitialContainer
                        initial={{ height: 0 }}
                        exit={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{
                            ease: 'easeInOut',
                            duration: reviewDuration,
                        }}
                    >
                        {rows.map(row => (
                            <Row key={row} index={row}>
                                <AnimatePresence>
                                    {row === 3 && !isHalfway ? <TitleAnimated /> : null}
                                </AnimatePresence>
                            </Row>
                        ))}
                    </InitialContainer>
                    <Backdrop
                        initial={{ height: 0 }}
                        exit={{ height: 0 }}
                        animate={{ height: '100%', animationDelay: '1s' }}
                        transition={{ ease: 'easeInOut', duration: reviewDuration }}
                    />
                </>
            )}
        </AnimatePresence>
    );
};
