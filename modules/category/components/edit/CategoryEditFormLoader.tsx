import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryEditFormLoader() {
    return (
        <div className="w-1/2 space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <div className="flex gap-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
        </div>
    );
}
