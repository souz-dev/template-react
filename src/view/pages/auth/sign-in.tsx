import Link from "../../components/link";
import { Card } from "../../components/card";
import { Form } from "../../components/form";
import { FormGroup } from "../../components/formGroup";
import { Input } from "../../components/input";
import * as S from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../app/hooks/useAuth";

const signInSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const { signIn, error } = useAuth();

  const onSubmit = (data: SignInFormValues) => {
    signIn(data);
  };

  return (
    <Card title="Sign In">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Sign In" error={errors.email && errors.email.message}>
          <Input
            fullWidth
            type="text"
            placeholder="usuario, número de telefone ou email"
            {...register("email")}
          />
        </FormGroup>
        <FormGroup
          label="Password"
          error={errors.password && errors.password.message}
        >
          <Input fullWidth type="password" {...register("password")} />
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
        {error && <p>{error}</p>}
      </Form>
    </Card>
  );
}
