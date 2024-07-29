import styled from "styled-components";

export type OverflowStyleType = {
  lines?: number;
};

export const OverflowContainer = styled.p<OverflowStyleType>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines = 1 }) => lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;
