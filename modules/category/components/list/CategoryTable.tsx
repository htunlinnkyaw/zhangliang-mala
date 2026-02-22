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
import CategoryTableRow from "./CategoryTableRow";
import CategoryTableLoader from "./CategoryTableLoader";
import useCategoryList from "../../hooks/useCategoryList";
import { CategoryDetailType } from "@/types/CategoryTypes";
import TablePagination from "@/components/TablePagination";

export default function CategoryTable() {
    const { data, error, isLoading } = useCategoryList();
    return (
        <>
            <div className="flex justify-between gap-1">
                <TableSearchInput placeholder="Search categories..." />
                <div>
                    <Link href={"/dashboard/categories/create"}>
                        <Button size={"sm"}>Create Category</Button>
                    </Link>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead className=" text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="[&_td]:align-top">
                    {isLoading ? (
                        <CategoryTableLoader />
                    ) : (
                        data.data.map((el: CategoryDetailType) => (
                            <CategoryTableRow key={el.id} category={el} />
                        ))
                    )}
                </TableBody>
            </Table>
            <TablePagination links={data?.links} meta={data?.meta} />
        </>
    );
}
