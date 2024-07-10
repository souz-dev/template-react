import { FormEventHandler, forwardRef, ReactNode } from "react";
import * as S from "./styles";

interface IFormType extends S.FormStyledType {
  children: ReactNode;
  title?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form = forwardRef<HTMLFormElement, IFormType>(
  ({ children, title, onSubmit, direction, removeSpacing, ...args }, ref) => {
    return (
      <S.Container {...args}>
        {title && <S.TitleForm>{title}</S.TitleForm>}
        <S.FormContent
          direction={direction}
          removeSpacing={removeSpacing}
          ref={ref}
          onSubmit={(e) => onSubmit?.(e)}
        >
          {children}
        </S.FormContent>
      </S.Container>
    );
  }
);
