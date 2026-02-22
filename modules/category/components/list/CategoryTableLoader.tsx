import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";

export default function CategoryTableLoader() {
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
            <Skeleton className="h-4 w-4" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-[150px]" />
          </TableCell>

          <TableCell>
            <Skeleton className="h-4 w-[150px]" />
          </TableCell>
          <TableCell>
            <div className="flex items-right justify-end gap-1">
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
