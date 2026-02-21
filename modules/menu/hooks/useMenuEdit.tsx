import { updateMenu } from "@/services/menuService";
import { MenuEditFormValues } from "@/types/MenuTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useEffect } from "react";

export const menuEditFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().min(0, "Price must be positive"),
  description: z.string().optional(),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to update menu",
    path: ["confirm"],
  }),
});

export default function useMenuEdit(menu: any) {
  const form = useForm<MenuEditFormValues>({
    resolver: zodResolver(menuEditFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      stay_here: false,
      confirm: false,
    },
  });

  useEffect(() => {
    if (menu) {
      form.reset({
        name: menu.name,
        price: menu.price,
        description: menu.description,
        stay_here: false,
        confirm: false,
      });
    }
  }, [menu, form]);

  const router = useRouter();

  const onSubmit = async (formData: MenuEditFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      const res = await updateMenu(payload, menu.id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to update menu");
      }
      toast.success("Menu updated successfully");
      if (!stay_here) {
        router.push(`/dashboard/menus/${menu.id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return { ...form, onSubmit };
}
