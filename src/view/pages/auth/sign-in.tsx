import Link from "../../components/link";
import { Card } from "../../components/card";
import { Form } from "../../components/form";
import { FormGroup } from "../../components/formGroup";
import { Input } from "../../components/input";
import * as S from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import useAuthStore from "../../../app/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { ISignInParams } from "../../../app/service/auth-service/sign-in";
import { authService } from "../../../app/service/auth-service";

const signInSchema = z.object({
  login: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const signIn = useAuthStore((state) => state.signIn);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: ISignInParams) => {
      return authService.signIn(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { user, token } = await mutateAsync(data);

      signIn({ user: user, token });
    } catch (error) {
      console.log(error);
      // toast.error('Credenciais inválidas!')
    }
  });

  return (
    <Card title="Sign In">
      <Form onSubmit={handleSubmit}>
        <FormGroup label="Sign In" error={errors.login && errors.login.message}>
          <Input
            fullWidth
            type="text"
            placeholder="usuario, número de telefone ou email"
            {...register("login")}
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
            loading={isPending}
          >
            {"Entrar"}
          </S.SubmitButton>
        </S.SpaceBetween>
      </Form>
    </Card>
  );
}
