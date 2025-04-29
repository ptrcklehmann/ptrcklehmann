import styled from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

export const SwitchButton = styled.button`
    border: none;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    will-change: transform;
    background-color: var(--foreground);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0px 0px 108px var(--primary), 0px 0px 32.4px var(--primary);

    &:hover {
        transform: scale(1.1);
    }

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        width: 3.5rem;
        height: 3.5rem;
    `}

    /* Mobile */
    ${lessThan('small')`
        width: 3rem;
        height: 3rem;
    `}
`;

export const SwitchSpan = styled.span`
    top: 50%;
    left: 0;
    right: 0;
    position: absolute;
    color: var(--background);
    transform: translateY(-45%);
    font-size: var(--fs-tini-tiny);
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        font-size: 0.7rem;
    `}

    /* Mobile */
    ${lessThan('small')`
        font-size: 0.6rem;
    `}
`;
