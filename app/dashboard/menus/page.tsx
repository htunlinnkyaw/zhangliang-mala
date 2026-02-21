import Header from "@/components/Header";
import MenuListSection from "@/modules/menu/components/list/MenuListSection";

export default function page() {
  return (
    <>
      <Header currentPage="Menus" />
      <MenuListSection />
    </>
  );
}
