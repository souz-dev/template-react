import { forwardRef, ReactNode } from "react";
import { Container, IconButtonStyledType } from "./styles";

type IconButtonType = IconButtonStyledType & {
  icon: ReactNode;
  name?: string;
  onClick?: () => void;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(
  ({ icon, name, onClick, disabled, ...args }, ref) => {
    return (
      <Container
        ref={ref}
        title={name}
        onClick={() => !disabled && onClick?.()}
        disabled={disabled}
        {...args}>
        {icon}
      </Container>
    );
  }
);

export default IconButton;
