import { INavbarStyles } from "../../../app/entities/styles";
import styled from "styled-components";

export const Container = styled.div<INavbarStyles>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ $isCollapsed }) =>
    $isCollapsed ? "8.8rem" : "28.2rem"};
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    "sidebar header header header"
    "sidebar main main main";
  transition: width 1s;
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
`;

export const HeaderContainer = styled.div`
  grid-area: header;
  transition: width 1s;
`;

export const MainContainer = styled.div`
  grid-area: main;
  transition: width 1s;
`;
