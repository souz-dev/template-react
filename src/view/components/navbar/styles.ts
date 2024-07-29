import styled from "styled-components";
import IconButton from "../iconButton";

interface INavbarStyles {
  $isCollapsed: boolean;
}

export const Logo = styled.img`
  margin-top: 2rem;
  margin-left: 1rem;
  width: 90%;
  height: 5%;
`;
export const LogoContainer = styled.div`
  /* padding: 1.6rem 2.4rem; */
`;

export const Sidebar = styled.div<INavbarStyles>`
  height: 100vh;
  width: ${({ $isCollapsed }) => ($isCollapsed ? "8.8rem" : "28.2rem")};
  position: relative;
  overflow-x: initial;
  background: var(--background-gray);
  /* padding: 1.6rem 2.4rem; */
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  transition: width 1s;

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  &:hover > .collapse-button {
    opacity: 1;
    pointer-events: initial;
  }
`;

export const NavButton = styled(IconButton).attrs({
  outline: true,
  className: "collapse-button",
  // eslint-disabled-next-line prettier/prettier
})<INavbarStyles>`
  opacity: 0;
  pointer-events: none;
  transition: opacity ease-in-out 0.2s;

  position: absolute;
  top: 2.4rem;
  right: -1.2rem;
  transform: ${({ $isCollapsed }) =>
    $isCollapsed ? "rotate(180deg)" : "initial"};

  width: 2.4rem;
  height: 2.4rem;
  border: 0.1rem solid var(--gray);
  background: var(--white);
  color: var(--text);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UnoderList = styled.ul`
  position: relative;
  list-style: none;
  display: block;
  padding: 0;
  transition: all 0.5s ease;
`;
