import { TableCell, TableRow } from "@/components/ui/table";
import { CategoryDetailType } from "@/types/CategoryTypes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Edit2, Eye } from "lucide-react";
import CategoryDeleteBtn from "../delete/CategoryDeleteBtn";

export default function CategoryTableRow({
    category,
}: {
    category: CategoryDetailType;
}) {
    return (
        <TableRow>
            <TableCell className="font-medium">{category.id}</TableCell>
            <TableCell>{category.title}</TableCell>
            <TableCell>{category.slug}</TableCell>
            <TableCell>
                {new Date(category.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </TableCell>
            <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    <Link href={`/dashboard/categories/${category.id}`}>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href={`/dashboard/categories/${category.id}/edit`}>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Edit2 className="h-4 w-4" />
                        </Button>
                    </Link>
                    <CategoryDeleteBtn id={category.id} />
                </div>
            </TableCell>
        </TableRow>
    );
}
