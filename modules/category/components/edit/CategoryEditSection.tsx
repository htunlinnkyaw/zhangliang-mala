"use client";
import useCategoryDetail from "../../hooks/useCategoryDetail";
import CategoryEditForm from "./CategoryEditForm";
import CategoryEditFormLoader from "./CategoryEditFormLoader";

export default function CategoryEditSection() {
    const { id, data, error, isLoading } = useCategoryDetail();
    return (
        <div className="container mx-auto py-3 flex flex-col gap-4">
            <div>
                <h3 className="text-xl font-semibold mb-1">Edit category</h3>
                <p className="text-xs text-muted-foreground">
                    Update the essential details about this category below.
                </p>
            </div>
            {isLoading ? (
                <CategoryEditFormLoader />
            ) : (
                <CategoryEditForm data={data.data} />
            )}
        </div>
    );
}
