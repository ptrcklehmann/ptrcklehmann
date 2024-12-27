import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 3.5rem 0;

  @media (min-width: 701px) and (max-width: 1120px) {
    padding: 2rem;
  }

  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
