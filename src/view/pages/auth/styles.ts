import { Button } from "../../components/button";
import styled from "styled-components";

export const SubmitButton = styled(Button)`
  max-width: 50%;
`;

export const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;
