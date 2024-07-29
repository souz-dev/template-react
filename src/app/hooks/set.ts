/* eslint-disabled @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from "react";
// eslint-disabled-next-line @typescript-eslint/no-unnecessary-type-constraint
const useSet = <T>(initialValue?: T[]) => {
  const [set, setSet] = useState(
    initialValue ? new Set<T>(initialValue) : undefined
  );
  const add = useCallback(async (value: T) => {
    let result: Set<T> | undefined;

    await setSet(currentSet => {
      const current = new Set(currentSet);
      current.add(value);
      return (result = current);
    });
    return result;
  }, []);
  const remove = useCallback(async (value: T) => {
    let result: Set<T> | undefined;
    await setSet(currentSet => {
      const current = new Set(currentSet);
      current?.delete(value);
      return (result = current);
    });
    return result;
  }, []);
  const clear = useCallback(() => setSet(new Set()), []);
  const actions = useMemo(
    () => ({ set: setSet, add, edit: add.bind({}), remove, clear }),
    [add, remove, clear]
  );
  return [set, actions] as const;
};
export default useSet;
