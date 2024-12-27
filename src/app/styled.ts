import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 3.5rem;
  position: relative;

  @media (min-width: 701px) and (max-width: 1120px) {
    padding: 2rem;
  }

  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Description = styled.div`
  color: var(--text);
  max-width: var(--max-width);
  transition: color 0.3s ease;
  width: 75%;

  p {
    font-family: var(--font-sans);
    font-size: var(--fs-large);
    line-height: 1.2;
    letter-spacing: -0.05rem;
    overflow: initial;
    font-weight: 400;
  }

  a {
    font-weight: 700;
    color: var(--primary);
    line-height: 1.2;
    letter-spacing: -0.05rem;
    opacity: 0.75;
    transition: opacity 0.2s ease-out;
  }

  a:hover {
    opacity: 1;
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    width: 90%;

    p {
      font-size: var(--fs-medium);
      line-height: 1.2;
    }
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 100%;

    p {
      width: 100%;
      font-size: var(--fs-small);
      line-height: 1.2;
    }
  }
`;