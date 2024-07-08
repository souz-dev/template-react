import { Outlet } from "react-router-dom";
import * as S from "./auth-styles";

export function AuthLayout() {
  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <Outlet />
        </S.Div>
      </S.Section>
    </S.Container>
  );
}
