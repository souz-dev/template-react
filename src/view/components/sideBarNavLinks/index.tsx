import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface INavLinks {
  to: string;
  icon: JSX.Element;
  title: string;
  subBtn?: string[];
  span?: string;
}

export const NavLinks = styled(NavLink)`
  position: relative;
  padding: 1.5rem 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 0.8rem;
  color: var(--text);
  &:hover {
    background: #fff;
    color: #4d70ff;
  }

  &:active {
  }
`;
const Icon = styled.div`
  margin-right: 1.4rem;
  font-size: 2rem;
`;

export const Newest = styled.div`
  position: absolute;
  right: 2rem;
  border-radius: 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0.2rem 0.2rem 0.5rem rgb(0 0 0 / 91%);
`;

interface INavBtn {
  open?: boolean;
}

export const NavBtn = styled.div<INavBtn>`
  position: relative;
  padding: 1.5rem 2rem;
  text-decoration: none;
  display: flex;
  font-size: 1.8rem;
  align-items: center;
  justify-content: left;
  margin: 0.4rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background: ${({ open }) => open && "var(--text)"};

  &:hover {
    background: #fff;
    color: #4d70ff;
  }
`;

export const Arrow = styled.div<INavBtn>`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translate(0, -50%);
  > span {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.5rem 0 0.5rem 0.6rem;
    border-color: transparent transparent transparent var(--text);
    pointer-events: none;
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(90deg)")};
    border-left: ${({ open }) => !open && "0.6rem solid var(--text)"};
    transition: all 0.2s;
  }
`;

interface ISubMenu {
  tall?: number;
  opened?: boolean;
}
export const SubMenu = styled.div<ISubMenu>`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: #00000029; */
  overflow: hidden;
  height: ${({ opened, tall = 1 }) => (opened ? tall * 59 + 20 : 0)}px;
  padding: ${({ opened }) => (opened ? "1rem 0px" : "0px")};
  margin: 0.2rem 0 0.2rem;
`;

export const Sublinks = styled(NavLink)`
  padding: 0.6rem 2rem;
  height: 5.5rem !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0.2rem 1rem;
  color: var(--text);
  border-radius: 0%.8rem;
  > span {
    margin-left: 1.4rem;
  }
  &:hover {
    background: #fff;
    color: #4d70ff;
  }

  &:active {
    color: #4d70ff;
    transition: all 0.4s ease;
  }
`;
interface ISideBarNavlink extends INavLinks {
  handleClick?: () => void;
}
export function SideBarNavlink({
  to,
  icon,
  title,
  subBtn,
  span,
  handleClick,
}: ISideBarNavlink) {
  const [openSubMenu, setOpenSubmenu] = useState<boolean>(false);
  const handleSubmenu = () => {
    if (subBtn !== undefined) {
      setOpenSubmenu(!openSubMenu);
    }
  };
  return (
    <li>
      {subBtn === undefined ? (
        <NavLinks
          to={{
            pathname: to,
          }}
          onClick={handleClick}
        >
          <Icon>{icon}</Icon>
          {title}
          {span !== undefined && <Newest> {span}</Newest>}
        </NavLinks>
      ) : (
        <NavBtn onClick={() => handleSubmenu()}>
          <Icon>{icon}</Icon>
          {title}
          {span !== undefined && <Newest> {span}</Newest>}
          {subBtn !== undefined && (
            <Arrow open={!openSubMenu}>
              <span></span>
            </Arrow>
          )}
        </NavBtn>
      )}
      <SubMenu
        opened={openSubMenu}
        tall={subBtn !== undefined && subBtn.length ? subBtn.length : undefined}
      >
        {subBtn !== undefined &&
          subBtn.map((btn, i) => (
            <div key={i}>
              <Sublinks
                key={i}
                to={to + "/" + btn.toLowerCase()}
                onClick={handleClick}
              >
                {btn.slice(0, 2).toUpperCase()}
                <span>{btn}</span>
              </Sublinks>
            </div>
          ))}
      </SubMenu>
    </li>
  );
}
