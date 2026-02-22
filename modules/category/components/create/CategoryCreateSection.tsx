"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryCreateForm from "./CategoryCreateForm";

export default function CategoryCreateSection() {
    return (
        <section className="container mx-auto py-3 flex flex-col gap-4">
            <div>
                <h3 className="text-xl font-semibold mb-1">Create Category</h3>
                <p className="text-xs text-muted-foreground">
                    Enter category details below to add a new record.
                </p>
            </div>

            <CategoryCreateForm />

            <div className="flex gap-1">
                <Link href={`/dashboard/categories`}>
                    <Button variant={"outline"} size={"sm"}>
                        All Categories
                    </Button>
                </Link>
            </div>
        </section>
    );
}
