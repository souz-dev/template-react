import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from "react";

type MapType<A, B> = [key: A, value: B];

export type MapActionsType<A, B> = {
  set: Dispatch<SetStateAction<Map<A, B> | undefined>>;
  add: (key: A, value: B) => void;
  edit: (key: A, value: B) => void;
  remove: (key: A) => void;
  clear: () => void;
};

// eslint-disabled-next-line @typescript-eslint/no-unnecessary-type-constraint
const useMap = <A, B>(initialValue?: MapType<A, B>[]) => {
  const [map, setMap] = useState(
    initialValue ? new Map<A, B>(initialValue) : undefined
  );

  const add = useCallback(
    (key: A, value: B) =>
      setMap(currentMap => new Map(currentMap).set(key, value)),
    []
  );

  const remove = useCallback(
    (key: A) =>
      setMap(currentMap => {
        currentMap?.delete(key);
        return new Map(currentMap);
      }),
    []
  );

  const clear = useCallback(() => setMap(new Map()), []);

  const actions = useMemo(
    () => ({ set: setMap, add, edit: add.bind({}), remove, clear }),
    [add, remove, clear]
  );

  return [map, actions] as const;
};

export default useMap;
