"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import useMenuCreate from "../../hooks/useMenuCreate";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { User } from "@/types/UserTypes";

// temp type definition for category select options, should be replaced with actual type from API response
type categoryMenuSelectOption = {
  id: number;
  title: string;
  slug: string;
  user: User;
  created_at: string;
  updated_at: string;
};

export default function MenuCreateForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    onSubmit,
    data,
    isLoading,
    error,
  } = useMenuCreate();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-6">
      <FieldGroup className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Menu Title</FieldLabel>
              <Input
                type="text"
                placeholder="Enter menu title"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="category_id"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Category</FieldLabel>
              <Select
                value={field.value ? String(field.value) : ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger aria-invalid={fieldState.invalid}>
                  <SelectValue
                    placeholder="Select category"
                    // Show selected category title instead of id
                    {...(field.value && data?.data
                      ? {
                          children:
                            data.data.find(
                              (category: categoryMenuSelectOption) =>
                                String(category.id) === String(field.value),
                            )?.title || "Select category",
                        }
                      : {})}
                  />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    data?.data.map((category: categoryMenuSelectOption) => (
                      <SelectItem key={category.id} value={String(category.id)}>
                        {category.title}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Price</FieldLabel>
              <Input
                type="text"
                placeholder="Enter price"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="image"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Image</FieldLabel>
              <Input
                type="text"
                placeholder="Enter image URL"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <FieldGroup className="flex flex-col gap-4">
        <Controller
          name="stay_here"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id="stay-here-check"
              />
              <FieldLabel htmlFor="stay-here-check">
                Stay here and create another menu
              </FieldLabel>
            </div>
          )}
        />

        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id="confirm-check"
              />
              <FieldLabel htmlFor="confirm-check">
                I confirm to create new menu
              </FieldLabel>
            </div>
          )}
        />

        <div className="flex gap-2">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Spinner className="h-4 w-4" />
                Saving...
              </div>
            ) : (
              "Save Menu"
            )}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
