"use client";
import z from "zod";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/stores/useProfileStore";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useProfileEdit from "../hooks/useProfileEdit";
import { Spinner } from "@/components/ui/spinner";
import { UserEditFormValues } from "@/types/UserTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/services/profileService";
import { toast } from "sonner";

export const profileEditFormSchema = z.object({
  name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export default function EditProfileSection() {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore();
  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<UserEditFormValues>({
    resolver: zodResolver(profileEditFormSchema),
    defaultValues: {
      name: profile?.name || "",
      email: profile?.email || "admin@gmail.com",
    },
  });

  const onSubmit = async (data: UserEditFormValues) => {
    try {
      const res = await updateProfile(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Profile update failed");
      }
      setProfile(json.data);
      toast.success("Profile updated successfully");
      router.back();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An expected error occurred");
      }
    }
  };

  return (
    <section className=" container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">
          Edit Profile Information
        </h3>
        <p className=" text-xs text-muted-foreground">
          Update your information to keep records up to date.
        </p>
      </div>

      <div className=" relative size-20">
        <Image
          width={80}
          height={80}
          className=" size-20 "
          src={
            profile?.photo ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt="profile image"
        />
        <Button
          className={`size-5 absolute bottom-0 right-0 translate-1/2 duration-150 active:scale-90 `}
        >
          <Pencil className=" size-2" />
        </Button>
      </div>

      <form id="user-edit" onSubmit={handleSubmit(onSubmit)}></form>

      <div>
        <h4 className=" mb-1">Name</h4>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <Input
                className=" max-w-sm"
                {...field}
                aria-invalid={fieldState.invalid}
                id="name"
                type="text"
                placeholder={profile?.name}
                form="user-edit"
              />
            </Field>
          )}
        />
      </div>

      <div>
        <h4 className=" mb-1">Email</h4>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <Input
                className=" max-w-sm"
                {...field}
                aria-invalid={fieldState.invalid}
                id="name"
                type="text"
                // defaultValue={profile?.email}
                disabled
                form="user-edit"
              />
            </Field>
          )}
        />
      </div>

      <div className=" flex gap-1">
        <Button
          onClick={() => router.back()}
          type="button"
          variant={"outline"}
          size={"sm"}
        >
          Cancel
        </Button>
        <Button
          disabled={isSubmitting}
          type="submit"
          form="user-edit"
          size={"sm"}
        >
          {isSubmitting && <Spinner className=" size-3" />}
          Update Name
        </Button>
      </div>
    </section>
  );
}
