import styled from 'styled-components';

import { between, lessThan } from '@/styles/breakpoints';

export const StyledLogo = styled.svg`
    fill: url('#yellow-linear');
    height: 4rem;

    /* Tablet and Smaller Desktop */
    ${between('small', 'medium')`
        height: 3.5rem;
    `}

    /* Mobile */
    ${lessThan('small')`
        height: 3rem;
    `}
`;
