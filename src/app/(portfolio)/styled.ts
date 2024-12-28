import { between, lessThan } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Main = styled.main`
    padding: 3.5rem;
    position: relative;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        padding: 2rem;
    `}

    /* Mobile */
    ${lessThan('small')`
        padding: 1.5rem;
    `}
`;

export const Container = styled.div`
    display: flex;
`;