import ArrowIcon from "../../../assets/icons/arrowDown.svg";

import useMap from "../../../app/hooks/map";

import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { exitElement } from "../../../app/utils";
import Option, { NoOptions, OptionType, ValueType } from "./option";
import {
  ArrowDownIcon,
  Container,
  InputFilter,
  OptionsContent,
  SelectContent,
  SelectStyleType,
} from "./styles";

type SelectType = Omit<SelectStyleType, "open"> & {
  children: ReactNode;
  placeholder?: string;
  defaultValue?: ValueType;
  value?: ValueType;
  $showSearch?: boolean;
  onChange?: (value: ValueType) => void;
};

const Select = ({
  children,
  placeholder,
  defaultValue = "",
  value,
  direction,
  onChange,
  disabled,
  $showSearch,
  ...args
}: SelectType) => {
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<ValueType>(defaultValue);
  const [texts, { set }] = useMap<ValueType, ReactNode>();

  const ref = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLInputElement>(null);

  const currentValue = useMemo(
    () => value ?? internalValue,
    [value, internalValue]
  );

  const selectPlaceholder = useMemo(() => {
    if (!filter && currentValue === "") return placeholder;
  }, [filter, currentValue, placeholder]);

  const handleSelect = useCallback(
    (valueOption: ValueType) => {
      onChange?.(valueOption);
      value === undefined && setInternalValue(valueOption);
      setFilter("");
      setOpen(false);
    },
    [value, onChange]
  );

  const options = useMemo(
    () =>
      Children.map(children ?? [], (child) => {
        if (isValidElement<OptionType>(child)) {
          return cloneElement(child, {
            onClick: (value: ValueType) => {
              handleSelect(value);
              child.props.onClick?.(value);
            },
          });
        }
      }),
    [children, handleSelect]
  );

  const filteredOptions = useMemo(() => {
    const currentFilter = filter.trim().toLocaleLowerCase();

    if (currentFilter)
      return options?.filter(({ props }) =>
        props.children.trim().toLocaleLowerCase().includes(currentFilter)
      );

    return options;
  }, [options, filter]);

  useEffect(() => {
    const currentTexts = new Map();
    Children.forEach(children, (child) => {
      if (isValidElement<OptionType>(child)) {
        currentTexts.set(child.props?.value, child.props?.children);
      }
    });
    set(currentTexts);
  }, [children, set]);

  const handleToggle = useCallback((open: boolean) => {
    setOpen(open);
    setFilter("");
  }, []);

  useEffect(() => {
    const hide = exitElement(ref, () => handleToggle(false));
    document.documentElement.addEventListener("click", hide);
    return () => document.documentElement.removeEventListener("click", hide);
  }, [handleToggle]);

  useEffect(() => {
    if (open) filterRef.current?.focus();
    else filterRef.current?.blur();
  }, [open, filterRef]);

  return (
    <Container ref={ref} {...args}>
      <SelectContent
        disabled={disabled}
        onClick={() => !disabled && handleToggle(!open)}
      >
        <ArrowDownIcon src={ArrowIcon} open={open} />
        {!filter && currentValue !== "" && <p>{texts?.get(currentValue)}</p>}
        <InputFilter
          value={filter}
          ref={filterRef}
          readOnly={!$showSearch}
          placeholder={selectPlaceholder}
          onChange={(e) => setFilter(e.target.value)}
          onKeyUp={(e) => e.preventDefault()}
        />
      </SelectContent>
      <OptionsContent open={open} direction={direction}>
        {filteredOptions?.length ? filteredOptions : <NoOptions />}
      </OptionsContent>
    </Container>
  );
};

export { Option };
export type { ValueType };
export default Select;
