import DashboardLayout from "@/modules/dashboard/components/DashboardLayout";
import ModuleLinkList from "@/modules/dashboard/components/ModuleLinkList";

export default function page() {
  return (
    <DashboardLayout>
      <ModuleLinkList />
    </DashboardLayout>
  );
}
