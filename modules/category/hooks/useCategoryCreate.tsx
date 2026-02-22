import { storeCategory } from "@/services/categoryService";
import { CategoryCreateFormValues } from "@/types/CategoryTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const categoryCreateFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new category",
    path: ["confirm"],
  }),
});

export default function useCategoryCreate() {
  const form = useForm<CategoryCreateFormValues>({
    resolver: zodResolver(categoryCreateFormSchema),
    defaultValues: {
      title: "",
      stay_here: false,
      confirm: false,
    },
  });
  const router = useRouter();

  const onSubmit = async (formData: CategoryCreateFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      const res = await storeCategory(payload);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to create category");
      }
      toast.success("Category created successfully");
      form.reset();
      if (!stay_here) {
        router.push(`/dashboard/categories/${json.data.id}`);
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
