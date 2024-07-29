import styled, { css } from "styled-components";

type StyleType = "default" | "success" | "danger" | "text";

export type IconButtonStyledType = {
  color?: StyleType;
  disabled?: boolean;
  outline?: boolean;
};

const getColorsByType = (type?: StyleType, disabled?: boolean) => {
  if (disabled)
    return ["var(--neutral-400)", "var(--neutral-400)", "var(--neutral)"];

  switch (type) {
    case "text":
      return ["var(--text)", "var(--text-title)", "var(--neutral)"];
    case "success":
      return [
        "var(--green-light-600)",
        "var(--green-light-800)",
        "var(--green-light-100)"
      ];
    case "danger":
      return [
        "var(--red-light-600)",
        "var(--red-light-800)",
        "var(--red-light-100)"
      ];
    default:
      return ["var(--blue-dark-600)", "var(--blue-dark-800)", "var(--neutral)"];
  }
};

export const Container = styled.button.attrs({
  type: "button"
})<IconButtonStyledType>`
  outline: transparent;
  border: initial;

  ${({ color, disabled, outline }) => {
    const [textColor, textHover, bg] = getColorsByType(color, disabled);

    const defaultStyle = css`
      color: ${textColor};

      &:hover {
        color: ${textHover};
        cursor: ${disabled ? "no-drop" : "pointer"};
      }
    `;

    return outline
      ? css`
          ${defaultStyle}
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${bg};
          border-radius: 0.4rem;
        `
      : css`
          ${defaultStyle}
          display: block;
          width: max-content;
          background-color: initial;
        `;
  }}
`;
