"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import useRegister from "../hooks/useRegister";
import { Controller } from "react-hook-form";
import { Spinner } from "@/components/ui/spinner";
import { defaultLoginRoutePath } from "@/lib/constants";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    control,
    onSubmit,
  } = useRegister();
  return (
    <Card className="rounded-xl py-10">
      <CardHeader className="px-7 md:px-10 pt-0 pb-5 text-center">
        <div className="flex items-center gap-3">
          <div>
            <CardTitle className="text-xl text-left">
              Create your account
            </CardTitle>
            <CardDescription className=" text-left">
              Enter your details to create your account
            </CardDescription>
          </div>
          <div>
            <img className=" h-8" src={`/logo.png`} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-7 md:px-10 py-0">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="grid gap-6">
            {/* Name */}

            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="grid gap-2">
                  <FieldLabel htmlFor="name">User Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full Name"
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>

                  <Input
                    {...field}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/*Confirm Password */}
            <Controller
              name="password_confirmation"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password-confirmation">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password-confirmation"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Direct Login to dashboard */}

            <Controller
              name="direct_login"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="direct-login-check"
                    />
                    <FieldLabel htmlFor="direct-login-check">
                      Directly login to Dashboard
                    </FieldLabel>
                  </div>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="mt-4 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner className=" size-3" />}
              Create Account
            </Button>
          </FieldGroup>

          <div className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link className=" underline" href={defaultLoginRoutePath}>
              Log in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
