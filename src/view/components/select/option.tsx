import OverflowText from "../overflowText";
import { memo } from "react";
// import { useTranslation } from "react-i18next";
import { ContainerOptions, NoOptionsContent } from "./styles";

export type ValueType = string | number | boolean | undefined;

export type OptionType = {
  children: string;
  value: ValueType;
  onClick?: (value: ValueType) => void;
  disabled?: boolean;
};

export const NoOptions = () => {
  // const { t } = useTranslation("components");

  return (
    <NoOptionsContent>
      <p>{"Sem opções"}</p>
    </NoOptionsContent>
  );
};

export const Option = ({
  children,
  value,
  onClick,
  disabled,
  ...args
}: OptionType) => {
  return (
    <ContainerOptions
      onClick={() => onClick?.(value)}
      disabled={disabled}
      {...args}
    >
      <OverflowText>{children}</OverflowText>
    </ContainerOptions>
  );
};

export default memo(Option);
