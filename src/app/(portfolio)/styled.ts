'use client';
import styled from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

export const Main = styled('main').attrs({
    'role': 'main',
    'aria-hidden': 'true',
})`
    padding: 3.5rem;
    position: relative;
    margin-bottom: 8rem;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        padding: 2rem;
    `}

    /* Mobile */
    ${lessThan('small')`
        padding: 1.5rem;
    `}
`;
