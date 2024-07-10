import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  background: transparent;
  color: var(--blue-dark-600);
  border: none;

  &:hover {
    color: var(--blue-dark-800);
    text-decoration: underline;
    cursor: pointer;
  }
`;
