import Header from "@/components/Header";
import MenuCreateSection from "@/modules/menu/components/create/MenuCreateSection";

export default function page() {
  return (
    <>
      <Header
        links={[{ title: "Menus", href: "/dashboard/menus" }]}
        currentPage="Create"
      />
      <MenuCreateSection />
    </>
  );
}
