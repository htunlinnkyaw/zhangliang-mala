import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Header
        links={[{ title: "Customers", href: "/dashboard/customers" }]}
        currentPage="Detail"
      />
    </>
  );
}
