import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

// Shared style constants
const commonFont = css`
    font-family: var(--font-sans);
    line-height: 1.3;
    letter-spacing: -0.05rem;
    overflow: initial;
`;

const responsiveFontSize = css`
    ${between('small', 'medium')`
      font-size: var(--fs-medium);
    `}

    ${lessThan('small')`
      font-size: var(--fs-small);
    `}
`;

export const Main = styled.main`
    padding: 3.5rem;
    position: relative;

    ${between('small', 'medium')`
    padding: 2rem;
  `}

    ${lessThan('small')`
    padding: 1.5rem;
  `}
`;

export const Container = styled.div`
    display: flex;
`;

export const Intro = styled(motion.article)`
    position: relative;
    color: var(--foreground);
    transition: color 0.3s ease;
    width: 80%;

    ${lessThan('medium')`
    width: 100%;
  `}
`;

export const Paragraph = styled.p`
    position: relative;
    ${commonFont}
    font-size: var(--fs-large);
    font-weight: 700;
    margin-bottom: 1.6rem;
    word-break: keep-all;
    ${responsiveFontSize}
`;

export const DescriptionShort = styled.div`
    p {
        ${commonFont}
        font-size: var(--fs-small);
        font-weight: 400;
    }

    a {
        font-weight: 700;
        color: var(--primary);
        opacity: 0.75;
        transition: opacity 0.2s ease-out;

        &:hover {
            opacity: 1;
        }
    }
`;

export const AnimatedMessageContainer = styled.p`
    ${commonFont}
    margin-top: 4rem;
    font-size: var(--fs-large);
    font-weight: 700;
    margin-bottom: 1.6rem;
    color: var(--foreground);
    transition: color 0.3s ease;
    ${responsiveFontSize}
`;

export const DesktopHiddenBr = styled.br`
    display: none;
    ${lessThan('small')`
        display: block;
    `}
`;
