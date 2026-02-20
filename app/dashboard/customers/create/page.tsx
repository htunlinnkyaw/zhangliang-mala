import Header from "@/components/Header";
import CustomerCreateSection from "@/modules/customer/components/create/CustomerCreateSection";

export default function page() {
  return (
    <>
      <Header
        links={[{ title: "Customers", href: "/dashboard/customers" }]}
        currentPage="Create"
      />
      <CustomerCreateSection />
    </>
  );
}
