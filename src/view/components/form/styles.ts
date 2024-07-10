import styled, { css } from "styled-components";

export type FormStyledType = {
  direction?: "vertical" | "horizontal";
  removeSpacing?: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TitleForm = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.75%;
  color: var(--text-title);
`;

export const FormContent = styled.form<FormStyledType>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ removeSpacing }) => (removeSpacing ? "initial" : "1.6rem")};

  ${({ direction = "vertical" }) => {
    if (direction === "horizontal") {
      return css`
        justify-content: start;
        align-items: flex-end;
        flex-direction: row;
      `;
    }

    return css`
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
    `;
  }}
`;
