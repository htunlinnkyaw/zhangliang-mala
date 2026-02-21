import Header from "@/components/Header";
import MenuDetailSection from "@/modules/menu/components/detail/MenuDetailSection";

export default function page() {
  return (
    <>
      <Header
        links={[{ title: "Menus", href: "/dashboard/menus" }]}
        currentPage="Detail"
      />
      <MenuDetailSection />
    </>
  );
}
