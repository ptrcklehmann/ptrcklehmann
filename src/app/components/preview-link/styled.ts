import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const PreviewLink = styled(Link)`
    font-weight: 700;
    color: var(--primary);
    line-height: 1.2;
    letter-spacing: -0.05rem;
    opacity: 0.75;
    transition: opacity 0.2s ease-out;
    &:hover {
        opacity: 1;
    }
`;

export const LinkPreviewCard = styled(motion.span)`
    position: fixed;
    z-index: 9999;
    background-color: var(--bg-card);
    padding: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 6px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 0.2rem;
    svg {
        fill: var(--text);
    }
`;

export const PreviewUrl = styled.code`
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
`;

export const PreviewDescription = styled.span`
    font-size: 1rem;
    color: var(--text);
`;
