import { Outlet } from "react-router-dom";
import { MainContainer } from "./styles";

export function Main() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
}
