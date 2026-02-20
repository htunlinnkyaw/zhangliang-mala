import { Skeleton } from "@/components/ui/skeleton";

function CustomerDetailCardLoader() {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
      {/* Name */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-8" />
        </div>
      </div>

      {/* DOB */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-32" />
      </div>

      {/* Email */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-40" />
      </div>

      {/* Phone */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-28" />
      </div>

      {/* Address */}
      <div className="col-span-full">
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-full" />
      </div>

      {/* Created At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>

      {/* Updated At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>
    </div>
  );
}

export default CustomerDetailCardLoader;
