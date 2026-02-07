import { ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";

type props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: props) {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
}
