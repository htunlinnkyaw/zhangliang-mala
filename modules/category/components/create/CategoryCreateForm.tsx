"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { customerGenders } from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import useCategoryCreate from "../../hooks/useCategoryCreate";
import Link from "next/link";

export default function CategoryCreateForm() {
  const {
    onSubmit,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useCategoryCreate();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FieldGroup className="grid grid-cols-1">
          {/* customer name */}
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Category Title</FieldLabel>
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
        </FieldGroup>
        <FieldGroup>
          {/* stay here checkbox */}
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
                  <FieldLabel htmlFor="stay-here-check">
                    Stay here and create another category
                  </FieldLabel>
                </div>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          {/* confirm checkbox */}
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
                    I confirm to create new category
                  </FieldLabel>
                </div>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Field className="col-span-full" orientation={"horizontal"}>
            <Link href={"/dashboard/categories"}>
              <Button variant={"outline"} type="button" onClick={() => reset()}>
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className="size-2" />
                  <span>Saving...</span>
                </>
              ) : (
                "Save category"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
