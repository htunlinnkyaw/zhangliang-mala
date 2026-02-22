import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryEditFormLoader() {
  return (
    <div className="w-1/3 space-y-5 animate-pulse">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Skeleton className="h-4 w-1/3 mb-1" />
          <Skeleton className="h-8 w-[400px]" />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex gap-2 items-center">
          <Skeleton className="h-4 w-5" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton className="h-4 w-5" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
}
