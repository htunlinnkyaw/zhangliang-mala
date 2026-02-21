"use client";
import TableSearchInput from "@/components/TableSearchInput";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import TablePagination from "@/components/TablePagination";
import { MenuDetailType } from "@/types/MenuTypes";
import useMenuList from "../../hooks/useMenuList";
import MenuTableLoader from "./MenuTableLoader";
import MenuTableRow from "./MenuTableRow";

export default function MenuTable() {
  const { data, isLoading } = useMenuList();
  return (
    <>
      <div className="flex justify-between gap-1">
        <TableSearchInput placeholder="Search Menu..." />
        <div>
          <Link href={"/dashboard/menus/create"}>
            <Button size={"sm"}>Create Menu</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:align-top">
          {isLoading ? (
            <MenuTableLoader />
          ) : (
            data.data.map((el: MenuDetailType) => (
              <MenuTableRow key={el.id} menu={el} />
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination links={data?.links} meta={data?.meta} />
    </>
  );
}
