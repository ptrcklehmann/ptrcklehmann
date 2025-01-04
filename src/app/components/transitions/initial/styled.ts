import { motion } from 'framer-motion';
import styled from 'styled-components';

import { lessThan } from '@/styles/breakpoints';

export const InitialContainer = styled(motion.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 2;
`;

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
    background-color: var(--primary);
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
    background: var(--bg-body);
`;

export const GridItem = styled(motion.div)`
    flex: 1;
    background: var(--primary);
    transform-origin: top center;
`;

export const TitleContainer = styled(motion.div)`
    margin: 0;
    overflow: hidden;
    color: var(--bg-body);
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

export const Title = styled(motion.h1)`
    margin-top: -10rem;
    font-family: var(--font-sans);
    font-size: var(--fs-extra-large);
    line-height: 1;
    letter-spacing: -0.05rem;
    color: #252728;

    /* Tablet and lower */
    ${lessThan('medium')`
       font-size: var(--fs-large);
    `}
`;

export const RowContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 3.5rem;
    background: var(--primary);
    height: calc(100vh / 5);
`;

export const Backdrop = styled(motion.div)`
    width: 100%;
    background-color: var(--bg-body);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0;
`;
