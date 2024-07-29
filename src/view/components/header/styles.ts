import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: sidebar;

  padding: 1rem 2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  border-bottom: 0.1rem solid var(--gray);
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.2rem;

    > h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 700;
      color: var(--text-title);
    }
    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 400;
    }
  }
`;
