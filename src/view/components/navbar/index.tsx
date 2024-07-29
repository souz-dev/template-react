import { useCallback } from "react";
import { Logo, NavButton, Sidebar, UnoderList } from "./styles";
import LeftIconArrow from "../../../assets/icons/leftArrow.svg";
import UseIsCollapsed from "../../../app/store/isCollapsed-store";
import { INavLinks, SideBarNavlink } from "../sideBarNavLinks";
import LogoImg from "../../../assets/logo.svg";

const makedButtons: INavLinks[] = [
  {
    to: "/configurations",
    icon: <i className="fas fa-user"></i>,
    title: "User",
    subBtn: ["Alterar perfil", "Sair"],
  },
  {
    to: "/whatssApp",
    icon: <i className="fas fa-comment-alt"></i>,
    title: "WhatssApp",
    subBtn: ["Numberchip", "Template"],
  },
  {
    to: "/configurations",
    icon: <i className="fas fa-cog"></i>,
    title: "Configurações",
    subBtn: ["Usuário", "Custumer", "Projeto"],
  },
];

export function Navbar() {
  const { isCollapsed, setIsCollapsed } = UseIsCollapsed();

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed, setIsCollapsed]);

  return (
    <Sidebar $isCollapsed={isCollapsed}>
      <NavButton
        $isCollapsed={isCollapsed}
        icon={<img src={LeftIconArrow} />}
        onClick={handleToggleCollapse}
      />
      {/* <LogoWrapper /> */}
      <Logo src={LogoImg} />
      <UnoderList>
        {makedButtons?.map((btn) => (
          <SideBarNavlink
            title={btn.title}
            icon={btn.icon}
            to={btn.to}
            subBtn={btn.subBtn}
            key={btn.title}
          />
        ))}
      </UnoderList>
    </Sidebar>
  );
}
