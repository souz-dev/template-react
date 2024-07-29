import styled, { css } from "styled-components";

export type SelectStyleType = {
  fullWidth?: boolean;
  open?: boolean;
  disabled?: boolean;
  direction?: "up" | "down";
};

export const Container = styled.div<SelectStyleType>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  position: relative;
`;

export const SelectContent = styled.button.attrs({
  type: "button",
})<SelectStyleType>`
  position: relative;
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--neutral-400);
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: start;
  color: var(--text);
  background: ${({ disabled }) =>
    disabled ? "var(--neutral)" : "var(--white)"};
  outline: transparent;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  span {
    color: var(--neutral-400);
  }

  p {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InputFilter = styled.input`
  position: absolute;
  width: calc(100% - 2rem);
  height: 4rem;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  left: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ArrowDownIcon = styled.img<SelectStyleType>`
  transition: 250ms ease-in-out;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const OptionsContent = styled.dialog<SelectStyleType>`
  width: 100%;
  max-height: 17.4rem;
  overflow: hidden auto;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 0.4rem;
  background-color: var(--white);
  border: 0.1rem solid var(--neutral-400);
  padding: 0.8rem;
  z-index: 5;

  &[open] {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  ${({ direction = "down" }) =>
    direction === "down"
      ? css`
          bottom: -0.4rem;
          transform: translateY(100%);
        `
      : css`
          top: -0.4rem;
          transform: translateY(-100%);
        `}
`;

export const NoOptionsContent = styled.div`
  padding: 2rem;
`;

export const ContainerOptions = styled.button.attrs({
  type: "button",
})<SelectStyleType>`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 0.4rem;
  text-align: start;
  background: ${({ disabled }) =>
    disabled ? "var(--neutral)" : "transparent"};
  color: var(--text);
  outline: transparent;
  border: none;

  &:hover {
    background-color: ${({ disabled }) => !disabled && "var(--blue-dark-800)"};
    color: ${({ disabled }) => !disabled && "var(--white)"};
    cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "visible")};
  }

  &:focus {
    outline: 0.2rem solid var(--gray);
  }
`;
