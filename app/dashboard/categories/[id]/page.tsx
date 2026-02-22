import Header from "@/components/Header";
import CategoryDetailSection from "@/modules/category/components/detail/CategoryDetailSection";

export default function page() {
    return (
        <>
            <Header
                links={[{ title: "Categories", href: "/dashboard/categories" }]}
                currentPage="Detail"
            />
            <CategoryDetailSection />
        </>
    );
}
