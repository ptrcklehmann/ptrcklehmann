import styled from "styled-components";

export const StyledLogo = styled.svg`
  fill: var(--primary);
  height: 4.5rem;

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    height: 3.5rem;
  }

  /* Mobile */
  @media (max-width: 700px) {
    height: 3rem;
  }
`;
