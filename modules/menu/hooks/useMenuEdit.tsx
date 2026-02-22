import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { menuApiUrl, updateMenu } from "@/services/menuService";
import { MenuDetailType, MenuEditFormValues } from "@/types/MenuTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";
import z from "zod";

export const menuEditFormSchema = z.object({
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

export default function useMenuEdit(menuData: MenuDetailType) {
  const { id, title, category, price, image } = menuData;
  const form = useForm<MenuEditFormValues>({
    resolver: zodResolver(menuEditFormSchema),
    defaultValues: {
      title,
      category_id: category.title,
      price: String(price),
      image: "https://placehold.co/400",
      stay_here: false,
      confirm: false,
    },
  });

  // const { data, isLoading } = useSWR(`${categoryApiUrl}?limit=100`, fetcher);

  const router = useRouter();

  const onSubmit = async (formData: MenuEditFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      const res = await updateMenu(payload, menuData.id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to update menu.");
      }
      mutate(`${menuApiUrl}/${menuData.id}`);
      mutate(`${menuApiUrl}/${menuData.id}/edit`);
      toast.success("Menu updated successfully");
      form.reset();
      if (!stay_here) {
        router.push(`/dashboard/menus/${json.data.id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An expected error occurred");
      }
    }
  };

  return { ...form, onSubmit };
}
