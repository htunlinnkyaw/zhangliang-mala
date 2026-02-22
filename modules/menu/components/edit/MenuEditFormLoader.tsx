import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

export default function MenuEditFormLoader() {
  return (
    <div className="w-1/2 space-y-6 animate-pulse">
      <FieldGroup className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Field>
          <FieldLabel>
            <Skeleton className="h-4 w-1/2 mb-2" />
          </FieldLabel>
          <Skeleton className="h-8 w-full" />
        </Field>
        <Field>
          <FieldLabel>
            <Skeleton className="h-4 w-1/2 mb-2" />
          </FieldLabel>
          <Skeleton className="h-8 w-full" />
        </Field>
        <Field>
          <FieldLabel>
            <Skeleton className="h-4 w-1/2 mb-2" />
          </FieldLabel>
          <Skeleton className="h-8 w-full" />
        </Field>
        <Field>
          <FieldLabel>
            <Skeleton className="h-4 w-1/2 mb-2" />
          </FieldLabel>
          <Skeleton className="h-8 w-full" />
        </Field>
      </FieldGroup>

      <FieldGroup className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-3/4" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-16" />
        </div>
      </FieldGroup>
    </div>
  );
}
