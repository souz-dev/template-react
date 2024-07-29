import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: sidebar;

  padding: 1.6rem 2.4rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  border-bottom: 0.1rem solid var(--gray);
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.2rem;

    > h1 {
      font-size: 2.4rem;
      line-height: 3.6rem;
      font-weight: 700;
      color: var(--text-title);
    }
    span {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400;
    }
  }
`;
