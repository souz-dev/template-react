import { Navbar } from "../../components/navbar";
import {
  Container,
  HeaderContainer,
  MainContainer,
  SidebarContainer,
} from "./styles";
import { Header } from "../../components/header";
import UseIsCollapsed from "../../../app/store/isCollapsed-store";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const { isCollapsed } = UseIsCollapsed();

  return (
    <Container $isCollapsed={isCollapsed}>
      <SidebarContainer>
        <Navbar />
      </SidebarContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Container>
  );
}
