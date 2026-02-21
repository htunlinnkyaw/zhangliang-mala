import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import { MenuDetailType } from "@/types/MenuTypes";
import dayjs from "dayjs";
import { ArrowRight, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import MenuDeleteBtn from "../delete/MenuDeleteBtn";

type Props = {
  menu: MenuDetailType;
};

export default function MenuTableRow({
  menu: { id, title, category, price, image, created_at, updated_at, user },
}: Props) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <p className=" capitalize">{title}</p>
      </TableCell>
      <TableCell>{category.title}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <img
          src={image ? image : "https://placehold.co/400"}
          className="w-20"
        />
      </TableCell>
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
          <MenuDeleteBtn id={id} />
          <Link href={`/dashboard/menus/${id}/edit`}>
            <Button variant={"secondary"} size={"xs"}>
              <Pencil className=" size-2" />
            </Button>
          </Link>
          <Link href={`/dashboard/menus/${id}`}>
            <Button variant={"secondary"} size={"xs"}>
              <ArrowRight className=" size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}
