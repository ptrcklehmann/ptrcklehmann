import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const PreviewLink = styled(Link)`
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
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    pointer-events: none;
    white-space: normal;
    overflow: hidden;
    transform: translate(-50%, -50%);
`;

export const LinkPreviewCard = styled(motion.span)`
    position: fixed;
    z-index: 9999;
    background-color: var(--bg-card);
    padding: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 10px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
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

export const PreviewImage = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 0.2rem;
    #Ebene_2 > defs > style > .cls-1 {
        fill: var(--foreground) !important;
    }
`;

export const PreviewUrl = styled.code`
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
`;

export const PreviewDescription = styled.span`
    font-size: 1rem;
    color: var(--foreground);
`;
