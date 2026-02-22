import Header from "@/components/Header";
import CategoryListSection from "@/modules/category/components/list/CategoryListSection";

export default function page() {
    return (
        <>
            <Header currentPage="Categories" />
            <CategoryListSection />
        </>
    );
}
