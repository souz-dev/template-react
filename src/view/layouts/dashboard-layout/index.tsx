import { Navbar } from "../../components/navbar";
import {
  Container,
  HeaderContainer,
  MainContainer,
  SidebarContainer,
} from "./styles";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import UseIsCollapsed from "../../../app/store/isCollapsed-store";

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
        <Main />
      </MainContainer>
    </Container>
  );
}
