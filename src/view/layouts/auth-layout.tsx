import { Outlet } from "react-router-dom";
import * as S from "./auth-styles";
import LogoImg from "../../assets/logo.svg";
export function AuthLayout() {
  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Header>
            <img src={LogoImg} alt="Logo Messaging" />
          </S.Header>
          <Outlet />
        </S.Div>
      </S.Section>
    </S.Container>
  );
}
