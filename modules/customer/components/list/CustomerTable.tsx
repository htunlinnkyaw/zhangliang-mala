"use client";
import TableSearchInput from "@/components/TableSearchInput";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import CustomerTableRow from "./CustomerTableRow";
import CustomerTableLoader from "./CustomerTableLoader";
import useCustomerList from "../../hooks/useCustomerList";
import { CustomerDetailType } from "@/types/CustomerTypes";
import TablePagination from "@/components/TablePagination";

export default function CustomerTable() {
  const { data, error, isLoading } = useCustomerList();
  return (
    <>
      <div className="flex justify-between gap-1">
        <TableSearchInput placeholder="Search customers..." />
        <div>
          <Link href={"/dashboard/customers/create"}>
            <Button size={"sm"}>Create Customer</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:align-top">
          {isLoading ? (
            <CustomerTableLoader />
          ) : (
            data.data.map((el: CustomerDetailType) => (
              <CustomerTableRow key={el.id} customer={el} />
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination links={data?.links} meta={data?.meta} />
    </>
  );
}
