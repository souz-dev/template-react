import { Button } from "../../../components/button";
import styled from "styled-components";

export const ContainerPage = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ActionsContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 0.8rem;
`;

export const ButtonContainerTable = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
`;

export const ButtonTable = styled(Button)`
  > div {
    font-size: 1.2rem;
  }
  padding: 0.2rem 1.6rem;
`;
