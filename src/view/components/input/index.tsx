import PasswordOff from "../../../assets/icons/passwordOff.svg";
import PasswordOn from "../../../assets/icons/passwordOn.svg";
import SearchIcon from "../../../assets/icons/search.svg";

import {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AddonContent,
  Container,
  InputContent,
  InputStylesTypes,
} from "./styles";
import { applyMask, HTMLInputType, MaskType } from "../../../app/utils";

type InputProps = InputStylesTypes & {
  type?: HTMLInputType;
  name?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  mask?: MaskType;
  maxLength?: number;
  noAutoComplete?: boolean;
  addon?: string;
  externalNode?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleSearch?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value,
      defaultValue,
      mask,
      maxLength,
      addon,
      noAutoComplete,
      externalNode,
      onChange,
      handleSearch,
      onKeyDown,
      ...args
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentLength, setCurrentLength] = useState(0);

    const icon = useMemo(() => {
      switch (type) {
        case "password":
          return showPassword ? (
            <img
              src={PasswordOff}
              alt="Password Off"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <img
              src={PasswordOn}
              alt="Password On"
              onClick={() => setShowPassword(!showPassword)}
            />
          );
        case "search":
          return (
            <img
              src={SearchIcon}
              alt="Search"
              onClick={() => handleSearch?.()}
            />
          );
        default:
          return null;
      }
    }, [handleSearch, showPassword, type]);

    const inputType = useMemo(() => {
      switch (true) {
        case showPassword:
        case type === "search":
          return "text";
        default:
          return type;
      }
    }, [showPassword, type]);

    const currentDefaultValue = useMemo(
      () => (mask ? applyMask(`${defaultValue}`, mask) : defaultValue),
      [mask, defaultValue]
    );

    useEffect(() => {
      if (maxLength && currentDefaultValue) {
        setCurrentLength(`${currentDefaultValue}`.length);
      }
    }, [maxLength, currentDefaultValue]);

    return (
      <Container {...args}>
        {externalNode}
        <InputContent readOnly={args.readOnly}>
          <input
            value={value}
            name={args.name}
            ref={ref}
            type={inputType}
            readOnly={args.readOnly}
            placeholder={args.placeholder}
            defaultValue={currentDefaultValue}
            maxLength={maxLength}
            {...(noAutoComplete ? { autoComplete: "off" } : {})}
            onChange={(e) => {
              if (mask) e.target.value = applyMask(e.target.value, mask);
              maxLength && setCurrentLength(e.target.value.length);
              onChange?.(e);
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => onKeyDown?.(e)}
          />
          {icon}
          {addon && <AddonContent>{addon}</AddonContent>}
        </InputContent>
        {maxLength && (
          <span>
            {currentLength}/{maxLength}
          </span>
        )}
      </Container>
    );
  }
);
