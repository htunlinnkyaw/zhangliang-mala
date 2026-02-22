import { Suspense } from "react";
import CategoryTable from "./CategoryTable";

export default function CategoryListSection() {
    return (
        <div className="container mx-auto py-3 flex flex-col gap-4">
            <div className="">
                <h3 className="text-xl font-semibold mb-1">Category Lists</h3>
                <p className="text-xs text-muted-foreground">
                    View comprehensive category information conveniently here.
                </p>
            </div>
            <Suspense>
                <CategoryTable />
            </Suspense>
        </div>
    );
}
