import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryDetailCardLoader() {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
      <div className="col-span-2">
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-4 w-36" />
      </div>

      <div>
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div>
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-4 w-36" />
      </div>
    </div>
  );
}
