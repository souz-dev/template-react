import styled, { css } from "styled-components";

type StyleType = "default" | "success" | "danger" | "link" | "border" | string;

export type ButtonStyledType = {
  positionLoading?: "start" | "end";
  positionIcon?: "start" | "end";
  color?: StyleType;
  outline?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
};

const getColorsByType = (type?: StyleType, disabled?: boolean) => {
  if (disabled)
    return [
      "var(--neutral)",
      "var(--neutral-400)",
      "var(--neutral-400)",
      "var(--neutral)",
    ];

  switch (type) {
    case "success":
      return [
        "var(--white)",
        "var(--green-light-600)",
        "var(--green-light-800)",
        "var(--green-light-100)",
      ];
    case "danger":
      return [
        "var(--white)",
        "var(--red-light-600)",
        "var(--red-light-800)",
        "var(--red-light-100)",
      ];
    case "link":
      return ["var(--blue-dark-600)", "", "", ""];

    case "border":
      return ["#3d3d3d", "var(--white)", "", ""];
    default:
      return [
        "var(--white)",
        "var(--blue-dark-600)",
        "var(--blue-dark-800)",
        "var(--neutral)",
      ];
  }
};

export const Container = styled.button<ButtonStyledType>`
  min-height: 4rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  display: flex;
  flex-direction: ${({ positionLoading }) =>
    positionLoading === "end" ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.4rem;
  border-radius: 0.4rem;
  outline: transparent;
  border: none;

  ${({ color, outline, disabled }) => {
    const [textColor, bg, bgHover, bgOutline] = getColorsByType(
      color,
      disabled
    );

    if (outline && color !== "link") {
      return css`
        color: ${bg};
        background-color: ${bgOutline};

        &:hover {
          color: ${bgHover};
          cursor: ${disabled ? "no-drop" : "pointer"};
        }
      `;
    }

    return css`
      background: ${bg};
      color: ${textColor};
      border: ${color === "border" ? "1px solid var(--secondary)" : "none"};

      &:hover {
        background: ${bgHover};
        text-decoration: ${color === "link" ? "underline" : "none"};
        cursor: ${disabled ? "no-drop" : "pointer"};
      }
    `;
  }}
`;

export const IconContainer = styled.div<ButtonStyledType>`
  display: flex;
  flex-direction: ${({ positionIcon }) =>
    positionIcon === "end" ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  line-height: 2rem;
`;
