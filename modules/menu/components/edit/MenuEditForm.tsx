"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
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
import { categoryMenuSelectOption, MenuDetailType } from "@/types/MenuTypes";
import useMenuEdit from "../../hooks/useMenuEdit";
import Link from "next/link";

type Props = {
  MenuEditData: MenuDetailType;
};

export default function MenuEditForm({ MenuEditData }: Props) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
    onSubmit,
  } = useMenuEdit(MenuEditData);
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
              <FieldLabel>Category ID</FieldLabel>
              <Input
                type="text"
                placeholder="Enter category ID"
                aria-invalid={fieldState.invalid}
                
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* <Controller
          name="category_id"
          control={control}
          defaultValue={MenuEditData.category_id ?? ""}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Category</FieldLabel>
              <Select
                value={field.value ? String(field.value) : ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Select category" />
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
        /> */}

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
          <Link href={`/dashboard/menus/${MenuEditData.id}`}>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <Spinner className="h-4 w-4" />
                Updating...
              </div>
            ) : (
              "Update Menu"
            )}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
