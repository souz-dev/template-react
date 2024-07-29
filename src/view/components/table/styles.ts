import styled, { css } from "styled-components";

export type TableStylesType = {
  spacing?: number;
  fullWidth?: boolean;
};

type CollapseStylesType = {
  open?: boolean;
};

type TrTypeStylesType = {
  isCollapse?: boolean;
};

export const Container = styled.table<TableStylesType>`
  ${({ spacing = 0.8, fullWidth }) => css`
    width: ${fullWidth ? "100%" : "auto"};
    border-spacing: 0;

    th,
    td {
      border-collapse: collapse;
      padding: ${spacing}rem ${spacing * 2}rem;

      &:first-of-type {
        padding-left: initial;
      }

      &:last-of-type {
        padding-right: initial;
      }
    }
  `}
`;

export const THead = styled.thead``;
export const TBody = styled.tbody``;

export const TrContent = styled.tr<TrTypeStylesType>`
  ${({ isCollapse }) =>
    isCollapse &&
    css`
      cursor: pointer;
      transition: ease-in-out 0.2s;

      > td {
        border-bottom: none;
      }
    `};
`;

export const TrCollapse = styled.tr`
  > td {
    padding: 0;
  }
`;

export const CollapseContent = styled.div<CollapseStylesType>`
  height: max-content;
  max-height: ${({ open }) => (open ? "100vh" : "0rem")};
  overflow: hidden;
  transition: max-height ease-in-out 0.2s;
`;

export const Th = styled.th`
  text-align: start;
  font-weight: 700;
  line-height: 2rem;
  vertical-align: middle;
  border-bottom: 0.1rem solid var(--gray);
`;

export const Td = styled.td`
  vertical-align: middle;
  border-bottom: 0.1rem solid var(--gray);
`;
