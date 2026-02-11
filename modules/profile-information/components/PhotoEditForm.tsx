import z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useProfileStore} from "@/stores/useProfileStore";
import {Field, FieldError, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import {uploadPhoto} from "@/services/photoService";
import {updateProfilePhoto} from "@/services/profileService";
import {toast} from "sonner";

export const photoUpdateFormSchema = z.object({
    image: z.instanceof(File, {message: "Image is required"})
        .refine((file) => file.size <= 5 * 1024 * 1024, {
            message: "Max image size is 5 MB",
        })
        .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), {
            message: "Only .jpg, .png, .webp formats are supported"
        }),

});

export type PhotoUpdateFormValues = z.infer<typeof photoUpdateFormSchema>;

export default function PhotoEditForm() {

    const {handleSubmit, formState: {isSubmitting}, control} = useForm<PhotoUpdateFormValues>({
        resolver: zodResolver(photoUpdateFormSchema),
    });

    const {setProfile} = useProfileStore();

    const onSubmit = async (data: PhotoUpdateFormValues) => {
        try {
            const res = await uploadPhoto(data);
            const json = await res.json();

            const res2 = await updateProfilePhoto({photo: json.data.file_name});
            const json2 = await res2.json();

            console.log(json2);

            if (!res.ok) {
                throw new Error(json.message || "Profile update failed");
            }
            setProfile(json2.data);
            toast.success("Profile updated successfully");
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        }

    }

    return (
        <form className="max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <Controller name="image"
                        control={control}
                        render={({field: {onChange, ref}, fieldState}) => (
                            <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="image">Upload Image</FieldLabel>
                                <Input
                                    type="file"
                                    id="image"
                                    accept="image/jpeg,image/png,image/webp"
                                    ref={ref}
                                    aria-invalid={fieldState.invalid}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        onChange(file);
                                    }}
                                />

                                {
                                    fieldState.error && <FieldError errors={[fieldState.error]}/>
                                }

                            </Field>
                        )}/>
            <Button type="submit" className="mt-4" disabled={isSubmitting}>
                {
                    isSubmitting && <Spinner/>
                }
                Upload Photo
            </Button>
        </form>
    )
}
