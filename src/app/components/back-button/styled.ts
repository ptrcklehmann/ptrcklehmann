import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;
  box-shadow: none;
  border: 0.2rem solid var(--primary);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.1) !important;
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const StyledSpan = styled.span`
  top: 50%;
  left: 0;
  right: 0;
  position: absolute;
  color: var(--primary);
  transform: translateY(-50%);
  font-size: var(--fs-tiny);
  font-weight: 700;
  font-family: var(--font-sans);

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    font-size: 0.7rem;
  }

  /* Mobile */
  @media (max-width: 700px) {
    font-size: var(--fs-tini-tiny);
  }
`;
