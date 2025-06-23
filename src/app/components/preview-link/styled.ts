'use client';
import { CIRCLE_PREVIEW_SIZE } from '@/lib/constants';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GradientTextLink = styled(motion.a).attrs({
    target: '_blank',
    rel: 'noopener noreferrer',
})`
    position: relative;
    display: inline-block;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.05rem;
    color: transparent;
    background-clip: text;
    background-image: var(--green-gradient);
    transition: opacity 0.2s ease-out;
`;

export const FloatingCirclePreview = styled(motion.span)`
    position: fixed;
    z-index: 999;
    width: ${CIRCLE_PREVIEW_SIZE}px;
    height: ${CIRCLE_PREVIEW_SIZE}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: var(--bg-card);
    color: var(--primary);
    text-align: center;
    font-size: 1.5rem;
    pointer-events: none;
    white-space: normal;
    overflow: hidden;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
