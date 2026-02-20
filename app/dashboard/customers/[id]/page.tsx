import Header from "@/components/Header";
import CustomerDetailSection from "@/modules/customer/components/detail/CustomerDetailSection";

export default function page() {
  return (
    <>
      <Header
        links={[{ title: "Customers", href: "/dashboard/customers" }]}
        currentPage="Detail"
      />
      <CustomerDetailSection />
    </>
  );
}
