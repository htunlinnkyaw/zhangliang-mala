import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";

export default function MenuTableLoader() {
  const searchParams = useSearchParams();
  return (
    <>
      {Array.from({
        length: searchParams.has("limit")
          ? parseInt(searchParams.get("limit")!)
          : 5,
      }).map((_, index) => (
        <TableRow key={index} className="align-top">
          <TableCell>
            <Skeleton className="h-4 w-6" />
          </TableCell>

          <TableCell>
            <Skeleton className="h-4 w-32" />
          </TableCell>

          <TableCell>
            <Skeleton className="h-4 w-24" />
          </TableCell>

          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>

          <TableCell>
            <Skeleton className="h-8 w-20 rounded-md" />
          </TableCell>

          <TableCell>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </TableCell>

          <TableCell>
            <div className="flex justify-end gap-2">
              <Skeleton className="h-6 w-6 rounded-sm" />
              <Skeleton className="h-6 w-6 rounded-sm" />
              <Skeleton className="h-6 w-6 rounded-sm" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
