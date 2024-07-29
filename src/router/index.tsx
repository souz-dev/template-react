import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/auth-layout";
import { SignIn } from "../view/pages/auth/sign-in";
import { ForgotPassword } from "../view/pages/auth/recover-passworld";
import { AuthGuard } from "./auth-guard";
import { DashboardLayout } from "../view/layouts/dashboard-layout";
import { NumberChip } from "../view/pages/whatssApp/numberchip";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/login/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/whatssApp/numberchip" element={<NumberChip />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
