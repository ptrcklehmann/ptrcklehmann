import styled from "styled-components";

export const SwitchButton = styled.button`
  border: none;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  will-change: transform;
  background-color: var(--text);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0px 0px 108px var(--primary), 0px 0px 32.4px var(--primary);

  &:hover {
    transform: scale(1.1);
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

export const SwitchSpan = styled.span`
  top: 50%;
  left: 0;
  right: 0;
  position: absolute;
  color: var(--bg-body);
  transform: translateY(-50%);
  font-size: var(--fs-tiny);
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
