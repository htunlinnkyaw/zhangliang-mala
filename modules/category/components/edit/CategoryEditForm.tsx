"use client";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import useCategoryEdit from "../../hooks/useCategoryEdit";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CategoryDetailType } from "@/types/CategoryTypes";

type Props = {
    data: CategoryDetailType;
};

export default function CategoryEditForm({ data }: Props) {
    const {
        onSubmit,
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting },
    } = useCategoryEdit(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-6">
                <FieldGroup className="grid grid-cols-1 gap-4">
                    <Controller
                        name="title"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Title</FieldLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter category title"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="slug"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Slug</FieldLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter category slug"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <FieldGroup>
                    <Controller
                        name="stay_here"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="stay-here-check"
                                    />
                                    <FieldLabel>Stay here and update another category</FieldLabel>
                                </div>
                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="confirm"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="confirm-check"
                                    />
                                    <FieldLabel htmlFor="confirm-check">
                                        I confirm to update this category
                                    </FieldLabel>
                                </div>
                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Field className="col-span-full" orientation={"horizontal"}>
                        <Button variant={"outline"} type="button" onClick={() => reset()}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Spinner className="size-2" />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                "Update category"
                            )}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </>
    );
}
