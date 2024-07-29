import { OverflowContainer, OverflowStyleType } from "./styles";

type OverflowTextType = OverflowStyleType & {
  children: string;
};

const OverflowText = ({ children, ...args }: OverflowTextType) => {
  return (
    <OverflowContainer {...args} title={children}>
      {children}
    </OverflowContainer>
  );
};

export default OverflowText;
