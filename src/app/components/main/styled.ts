import { motion } from 'framer-motion';
import styled from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

export const Main = styled.main`
    padding: 3.5rem;
    position: relative;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        padding: 2rem;
    `}

    /* Mobile */
    @media (max-width: 700px) {
        padding: 1.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
`;

export const Intro = styled(motion.article)`
    position: relative;
    color: var(--text);
    transition: color 0.3s ease;
    width: 100%;
`;

export const Paragraph = styled.p`
    font-family: var(--font-sans);
    font-size: var(--fs-large);
    line-height: 1.5;
    overflow: initial;
    font-weight: 700;
    margin-bottom: 1rem;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        font-size: var(--fs-medium);
    `}

    /* Mobile */
    ${lessThan('small')`
        font-size: var(--fs-small);
    `}
`;

export const DescriptionShort = styled.div`
    p {
        font-family: var(--font-sans);
        font-size: var(--fs-small);
        line-height: 1.2;
        letter-spacing: -0.05rem;
        overflow: initial;
        font-weight: 400;
    }

    a {
        font-weight: 700;
        color: var(--primary);
        line-height: 1.2;
        letter-spacing: -0.05rem;
        opacity: 0.75;
        transition: opacity 0.2s ease-out;
    }

    a:hover {
        opacity: 1;
    }
`;
