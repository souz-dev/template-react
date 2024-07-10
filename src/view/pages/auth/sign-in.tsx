import Link from "../../components/link";
import { Card } from "../../components/card";
import { Form } from "../../components/form";
import { FormGroup } from "../../components/formGroup";
import { Input } from "../../components/input";
import * as S from "./styles";
export function SignIn() {
  const onSubmit = () => {
    return console.log("submit");
  };

  return (
    <Card title="Sign In">
      <Form onSubmit={onSubmit}>
        <FormGroup label="Sign In">
          <Input
            fullWidth
            type="text"
            placeholder="usuario, número de telefone ou email"
          />
        </FormGroup>
        <FormGroup label="Password">
          <Input fullWidth type="password" />
        </FormGroup>
        <S.SpaceBetween>
          <Link to="forgot-password">{"Forgot Password"}</Link>

          <S.SubmitButton
            fullWidth
            type="submit"
            // disabled={!viewRecaptcha && !hasToken}
            // loading={loading}
          >
            {"Entrar"}
          </S.SubmitButton>
        </S.SpaceBetween>
      </Form>
    </Card>
  );
}
