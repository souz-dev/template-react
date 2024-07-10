import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: var(--neutral);
  padding: 2.6rem 0;
  gap: 2.4rem;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-top: 10px;
    width: 150%;
    height: 120%;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 504px;
  width: 100%;
  padding: 0 2rem;
  gap: 1.6rem;
`;
