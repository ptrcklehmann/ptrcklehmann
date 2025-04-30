'use client';
import { CIRCLE_PREVIEW_SIZE } from '@/lib/constants';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PreviewLink = styled(motion.a).attrs({
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

export const CirclePreview = styled(motion.span)`
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
    color: var(--foreground);
    text-align: center;
    font-size: 1.5rem;
    pointer-events: none;
    white-space: normal;
    overflow: hidden;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const FloatingLinkCard = styled(motion.span)`
    position: fixed;
    z-index: 9999;
    background-color: var(--bg-card);
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    pointer-events: none;
`;

export const LinkPreviewBall = styled(motion.span)`
    position: fixed;
    z-index: 9999;
    background-color: var(--bg-card);
    padding: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
`;

export const FavIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.2rem;
`;

export const PreviewTitle = styled.span`
    font-size: var(--fs-tiny);
    text-align: center;
`;

export const PreviewDescription = styled.span`
    font-size: 1rem;
    color: var(--foreground);
`;
