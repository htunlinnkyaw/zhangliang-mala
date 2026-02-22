import { TableCell, TableRow } from "@/components/ui/table";
import { CategoryDetailType } from "@/types/CategoryTypes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pencil } from "lucide-react";
import dayjs from "dayjs";
import { ButtonGroup } from "@/components/ui/button-group";
import CustomerDeleteBtn from "@/modules/customer/components/delete/CustomerDeleteBtn";
import CategoryDeleteBtn from "../delete/CategoryDeleteBtn";

export default function CategoryTableRow({
  category: { id, title, created_at, user, updated_at },
}: {
  category: CategoryDetailType;
}) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>
        <p>{user.name}</p>
        <p
          className=" text-muted-foreground flex items-center gap-1"
          title={dayjs(created_at).format("D MMM YYYY, h:mm A")}
        >
          {dayjs(updated_at).format("D MMM YYYY")}
        </p>
      </TableCell>
      <TableCell>
        <ButtonGroup className=" flex justify-end w-full">
          <CategoryDeleteBtn id={id} />
          <Link href={`/dashboard/categories/${id}/edit`}>
            <Button variant={"secondary"} size={"xs"}>
              <Pencil className=" size-2" />
            </Button>
          </Link>
          <Link href={`/dashboard/categories/${id}`}>
            <Button variant={"secondary"} size={"xs"}>
              <ArrowRight className=" size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}
