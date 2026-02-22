import Header from "@/components/Header";
import CategoryCreateSection from "@/modules/category/components/create/CategoryCreateSection";

export default function page() {
    return (
        <>
            <Header
                links={[{ title: "Categories", href: "/dashboard/categories" }]}
                currentPage="Create"
            />
            <CategoryCreateSection />
        </>
    );
}
