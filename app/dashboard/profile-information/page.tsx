import Header from "@/modules/dashboard/components/Header";
import ProfileInformationSection from "@/modules/profile-information/components/ProfileInformationSection";

export default function Page() {
  return (
    <div>
      <Header currentPage={"Profile Information"} />
      <ProfileInformationSection />
    </div>
  );
}
