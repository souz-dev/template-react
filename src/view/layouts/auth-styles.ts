import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Div = styled.div`
  max-width: 504px;
  width: 100%;
  padding: 0 2rem;
`;
