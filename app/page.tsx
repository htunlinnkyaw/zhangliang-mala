import AuthLayout from "@/modules/auth/components/AuthLayout";
import LoginForm from "@/modules/auth/components/LoginForm";

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
