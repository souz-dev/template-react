import { Children, ReactNode, useState } from "react";
import { CollapseContent, Td, TrCollapse, TrContent } from "./styles";

type TrType = {
  children: ReactNode;
  collapse?: boolean;
  collapsedContent?: ReactNode;
};

const Tr = ({ children, collapse = false, collapsedContent }: TrType) => {
  const [open, setOpen] = useState(collapse);

  if (!collapsedContent) return <TrContent>{children}</TrContent>;

  return (
    <>
      <TrContent isCollapse onClick={() => setOpen(!open)}>
        {children}
      </TrContent>
      <TrCollapse>
        <Td colSpan={Children.count(children)}>
          <CollapseContent open={open}>{collapsedContent}</CollapseContent>
        </Td>
      </TrCollapse>
    </>
  );
};

export default Tr;
