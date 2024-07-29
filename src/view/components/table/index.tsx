import { ReactNode } from "react";
import { Container, TableStylesType, TBody, Td, Th, THead } from "./styles";
import Tr from "./tr";

type TableType = TableStylesType & {
  children: ReactNode;
};

const Table = ({ children, ...args }: TableType) => {
  return <Container {...args}>{children}</Container>;
};

export default Table;
export { THead, TBody, Tr, Th, Td };
