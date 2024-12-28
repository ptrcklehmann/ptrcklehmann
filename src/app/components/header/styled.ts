import styled from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 3.5rem 3.5rem 0;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
      padding: 2rem;
    `}

    /* Mobile */
    ${lessThan('small')`
      padding: 1.5rem;
    `}
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;
