import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-width: 37.6rem;
  background-color: var(--white);
  box-shadow: 0 0.2rem 0.4rem var(--box-shadow),
    0 0.4rem 0.4rem var(--box-shadow);

  border-radius: 0.4rem;

  header {
    padding: 2.4rem;
    border-bottom: 0.1rem solid var(--gray);

    h2 {
      line-height: 2.4rem;
      color: var(--text-title);
      font-weight: bold;
      font-size: 2.4rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;

  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
    flex-direction: column;
    gap: 1.4rem;
  }
`;

export const Description = styled.p`
  line-height: 2rem;
  font-size: 1.4rem;
  color: var(--text);
  margin-bottom: 1.6rem;
`;
