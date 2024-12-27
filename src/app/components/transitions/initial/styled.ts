import { motion } from "framer-motion";
import styled from "styled-components";

export const InitialContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--bg-body);
`;

export const Title = styled(motion.h1)`
  margin-top: -10rem;
  font-family: var(--font-sans);
  font-size: var(--fs-extra-large);
  line-height: 1;
  letter-spacing: -0.05rem;
  color: #252728;

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    font-size: var(--fs-medium);
  }

  /* Mobile */
  @media (max-width: 700px) {
    font-size: var(--fs-small);
  }
`;

export const RowContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  padding-left: 3.5rem;
  background-color: #abe6cb;
  height: calc(100vh / 5);
`;

export const Backdrop = styled(motion.div)`
  width: 100%;
  background-color: var(--bg-body);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
`;
