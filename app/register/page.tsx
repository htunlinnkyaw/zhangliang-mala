import AuthLayout from "@/modules/auth/components/AuthLayout";
import RegisterForm from "@/modules/auth/components/RegisterForm";

export default function page() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
