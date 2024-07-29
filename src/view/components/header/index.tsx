import useTitleStore from "../../../app/store/header-title-store";
import { HeaderContainer } from "./styles";

export function Header() {
  const title = useTitleStore((state) => state.title);
  const subTitle = useTitleStore((state) => state.subtitle);

  return (
    <HeaderContainer>
      <div>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
    </HeaderContainer>
  );
}
