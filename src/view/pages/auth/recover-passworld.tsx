import { FormGroup } from "../../components/formGroup";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
export function ForgotPassword() {
  const onSubmit = () => {
    return console.log("submit");
  };
  const navigate = useNavigate();
  return (
    <Card
      title={"Esqueci minha senha!"}
      text={"Tudo bem, acontece! Digite seu e-mail para recuperá-la!"}
    >
      <Form onSubmit={onSubmit}>
        <FormGroup label={"labels.email"}>
          <Input fullWidth type="text" placeholder="ex: joão@empresa.com.br" />
        </FormGroup>
        <S.ButtonContent>
          <Button fullWidth outline onClick={() => navigate("/login")}>
            {"return"}
          </Button>
          <Button fullWidth type="submit">
            {"recover"}
          </Button>
        </S.ButtonContent>
      </Form>
    </Card>
  );
}
