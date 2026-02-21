import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { storeMenu } from "@/services/menuService";
import { MenuCreateFormValues } from "@/types/MenuTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import z from "zod";

export const menuCreateFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category_id: z
    .string()
    .min(1, "Category is required")
    .transform((val) => Number(val)),
  price: z
    .string()
    .min(1, "Price is required")
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 1, {
      message: "Price must be a number",
    }),
  image: z.string().min(1, "Image URL is required"),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new menu",
    path: ["confirm"],
  }),
});

export default function useMenuCreate() {
  const form = useForm<MenuCreateFormValues>({
    resolver: zodResolver(menuCreateFormSchema),
    defaultValues: {
      title: "",
      category_id: "",
      price: "",
      image: "",
      stay_here: false,
      confirm: false,
    },
  });
  const router = useRouter();

  const { data, isLoading, error } = useSWR(
    `${categoryApiUrl}?limit=100`,
    fetcher,
  );

  const onSubmit = async (formData: MenuCreateFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      console.log(payload);
      const res = await storeMenu(payload);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to create menu");
      }
      toast.success("Menu created successfully");
      form.reset();
      if (!stay_here) {
        router.push(`/dashboard/menus/${json.data.data.id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return { ...form, onSubmit, data, isLoading, error };
}
