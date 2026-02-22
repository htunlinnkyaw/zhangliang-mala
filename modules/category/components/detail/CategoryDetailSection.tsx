"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCategoryDetail from "../../hooks/useCategoryDetail";
import CategoryDetailCardLoader from "./CategoryDetailCardLoader";
import CategoryDetailCard from "./CategoryDetailCard";

export default function CategoryDetailSection() {
    const { id, data, error, isLoading } = useCategoryDetail();
    return (
        <section className="container mx-auto py-3 flex flex-col gap-4">
            <div>
                <h3 className="text-xl font-semibold mb-1">Category Detail</h3>
                <p className="text-xs text-muted-foreground">
                    All the essential details about this category in one place.
                </p>
            </div>
            {isLoading ? (
                <CategoryDetailCardLoader />
            ) : (
                <CategoryDetailCard data={data?.data} />
            )}
            <div className="flex gap-1">
                <Link href={`/dashboard/categories`}>
                    <Button variant={"outline"} size={"sm"}>
                        All Categories
                    </Button>
                </Link>
                <Link href={`/dashboard/categories/${id}/edit`}>
                    <Button variant={"outline"} size={"sm"}>
                        Edit Category
                    </Button>
                </Link>
            </div>
        </section>
    );
}
