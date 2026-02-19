import Header from "@/components/Header";
import CustomerListSection from "@/modules/customer/components/list/CustomerListSection";

export default function page() {
  return (
    <>
      <Header currentPage="Customers" />
      <CustomerListSection />
    </>
  );
}
