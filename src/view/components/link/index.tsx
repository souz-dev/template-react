import { forwardRef, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import * as S from "./styles";

type LinkType = LinkProps & {
  children: ReactNode;
};

const Link = forwardRef<HTMLAnchorElement, LinkType>(
  ({ children, ...args }, ref) => {
    return (
      <S.Container {...args} ref={ref}>
        {children}
      </S.Container>
    );
  }
);

Link.displayName = "Link";

export default Link;
