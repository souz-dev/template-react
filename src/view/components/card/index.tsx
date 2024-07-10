import { ReactNode } from "react";
import * as S from "./styles";

interface CardProps {
  children: ReactNode;
  title: string;
  text?: string;
}

export function Card({ children, title, text }: CardProps) {
  return (
    <S.Container>
      <header>
        <h2>{title}</h2>
      </header>
      <S.Content>
        <main>
          {text && <S.Description>{text}</S.Description>}
          {children}
        </main>
      </S.Content>
    </S.Container>
  );
}
