import { ReactNode } from "react";
import * as S from "./styles";

type FormGroupType = {
  children: ReactNode;
  label?: string;
  error?: string;
};

export function FormGroup({ children, label, error, ...args }: FormGroupType) {
  return (
    <S.Container {...args}>
      {label && <S.LabelForm>{label}</S.LabelForm>}
      {children}
      {error && <S.ErrorForm>{error}</S.ErrorForm>}
    </S.Container>
  );
}
