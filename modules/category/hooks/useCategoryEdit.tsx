import { categoryApiUrl, updateCategory } from "@/services/categoryService";
import {
    CategoryDetailType,
    CategoryEditFormValues,
} from "@/types/CategoryTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";
import z from "zod";

export const categoryEditFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    stay_here: z.boolean(),
    confirm: z.boolean().refine((val) => val === true, {
        message: "You must check to update this category",
        path: ["confirm"],
    }),
});

export default function useCategoryEdit(categoryData: CategoryDetailType) {
    const form = useForm<CategoryEditFormValues>({
        resolver: zodResolver(categoryEditFormSchema),
        defaultValues: {
            ...categoryData,
            stay_here: false,
            confirm: false,
        },
    });
    const router = useRouter();

    const onSubmit = async (formData: CategoryEditFormValues) => {
        try {
            const { stay_here, confirm, ...payload } = formData;
            const res = await updateCategory(payload, categoryData.id);
            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.message || "Failed to update category");
            }
            mutate(`${categoryApiUrl}/${categoryData.id}`);
            toast.success("Category updated successfully");
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
