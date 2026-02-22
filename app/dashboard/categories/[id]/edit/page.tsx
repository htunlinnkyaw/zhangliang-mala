import Header from "@/components/Header";
import CategoryEditSection from "@/modules/category/components/edit/CategoryEditSection";

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <>
            <Header
                links={[
                    { title: "Categories", href: "/dashboard/categories" },
                    { title: "Detail", href: `/dashboard/categories/${id}` },
                ]}
                currentPage="Edit"
            />
            <CategoryEditSection />
        </>
    );
}
