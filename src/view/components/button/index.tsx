import { forwardRef, ReactNode } from "react";
import Loading from "../loading";
import * as S from "./styles";

type ButtonType = S.ButtonStyledType & {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button = forwardRef<HTMLButtonElement, ButtonType>(
  (
    {
      children,
      loading,
      icon,
      onClick,
      type = "button",
      positionIcon,
      disabled,
      ...args
    },
    ref
  ) => {
    return (
      <S.Container
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          !disabled && onClick?.();
        }}
        type={type}
        disabled={disabled}
        {...args}
      >
        {loading && <Loading />}
        <S.IconContainer positionIcon={positionIcon}>
          {icon !== null && icon}
          {children}
        </S.IconContainer>
      </S.Container>
    );
  }
);
