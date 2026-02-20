import Header from "@/components/Header";

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
          { title: "Customers", href: "/dashboard/customers" },
          { title: "Detail", href: `/dashboard/customers/${id}` },
        ]}
        currentPage="Edit"
      />
      {/* <CustomerEditSection /> */}
    </>
  );
}
