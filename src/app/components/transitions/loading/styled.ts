import { motion } from 'framer-motion';
import styled from 'styled-components';

import { lessThan } from '@/styles/breakpoints';

export const LoadingScreen = styled(motion.div)`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent; /* allow underlying page to be revealed by blinds */
    transform: translateZ(0);
    text-align: center;
    cursor: progress;
`;

export const GridContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    background: transparent; /* avoid filling gaps; reveal underlying page */
    will-change: transform, opacity;
    contain: layout paint;
`;

export const GridItem = styled(motion.div)`
    flex: 1 0 0;
    background: var(--primary);
    transform-origin: top center; /* blinds open upwards */
    will-change: transform, opacity;
`;

export const TitleContainer = styled(motion.div)`
    margin: 0;
    overflow: hidden;
    /* color: var(--background); */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    padding-left: 3.5rem;

    /* Tablet and lower */
    ${lessThan('medium')`
       padding-left: 2rem;
    `}

    /* Mobile */
    ${lessThan('small')`
       padding-left: 1.5rem;
    `}
`;

export const TitleLine = styled(motion.div)`
    display: flex;
    font-size: var(--fs-extra-large);
    color: #252728;
    line-height: 0.85;
    overflow: hidden;
    font-weight: 700;

    /* Tablet and lower */
    ${lessThan('medium')`
       font-size: var(--fs-large);
    `}

    /* Mobile */
    ${lessThan('small')`
       font-size: var(--fs-medium);
    `}
`;
