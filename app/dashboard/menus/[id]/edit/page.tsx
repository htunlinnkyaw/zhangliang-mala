import Header from "@/components/Header";
import MenuEditSection from "@/modules/menu/components/edit/MenuEditSection";

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
          { title: "Menus", href: "/dashboard/menus" },
          { title: "Detail", href: `/dashboard/menus/${id}` },
        ]}
        currentPage="Edit"
      />
      <MenuEditSection id={id} />
    </>
  );
}
