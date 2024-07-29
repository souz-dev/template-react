import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../../assets/logo.svg";

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;

  > a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    /* img {
      overflow: hidden;
      margin-top: 10px;
      width: 150%;
      height: 120%;
    } */
  }
`;

export function Logo() {
  return (
    <LogoWrapper>
      <Link to="/home">
        <img src={LogoImg} alt="Logo Messaging" />
      </Link>
    </LogoWrapper>
  );
}
