import { Skeleton } from "@/components/ui/skeleton";

export default function MenuDetailCardLoader() {
  return (
    <>
      <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
        {/* Name */}
        <div>
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Category */}
        <div>
          <Skeleton className="h-3 w-20 mb-2" />
          <Skeleton className="h-4 w-28" />
        </div>

        {/* Price */}
        <div>
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Image */}
        <div>
          <Skeleton className="h-3 w-14 mb-3" />
          <Skeleton className="w-40 h-24 rounded border" />
        </div>

        {/* Created At */}
        <div>
          <Skeleton className="h-3 w-24 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>

        {/* Updated At */}
        <div>
          <Skeleton className="h-3 w-24 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </>
  );
}
