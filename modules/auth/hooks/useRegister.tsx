"use client";

import { RegisterFormValues } from "@/types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import useCookie from "react-use-cookie";
import { useProfileStore } from "@/stores/useProfileStore";
import { useRouter } from "next/navigation";
import { register } from "@/services/authService";
import { toast } from "sonner";
import { defaultLoginRoutePath } from "@/lib/constants";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z
      .string()
      .min(8, "Password confirmation is required"),
    direct_login: z.boolean().optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"], // show error on this field
  });

export default function useRegister() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      direct_login: false,
    },
  });

  const [token, setToken] = useCookie("token");
  const router = useRouter();
  const { setProfile } = useProfileStore();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const res = await register(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Resgister failed");
      }

      if (!data.direct_login) {
        router.push(defaultLoginRoutePath);
      } else {
        // set token
        setToken(json.data.token, {
          days: 7,
          SameSite: "Strict",
          Secure: true,
        });
        // set profile data
        setProfile(json.data.user);

        router.push("/dashboard");
      }

      toast.success("Registeration successful");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An expected error occoured");
      }
    }
  };

  return {
    ...form,
    onSubmit,
  };
}
