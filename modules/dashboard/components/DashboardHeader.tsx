"use client";
import { useProfileStore } from "@/stores/useProfileStore";
import LogoutBtn from "./LogoutBtn";

export default function DashboardHeader() {
  const { profile } = useProfileStore();

  return (
    <header className=" border-b bg-card mb-8 ">
      <div className="py-2 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className=" h-8" src={`/logo.svg`} />
          <p>Zhangliang Mala POS</p>
        </div>
        <div className=" flex gap-2 items-center">
          <img
            className=" size-8 rounded-full border-2 border-muted"
            src={`${profile?.photo}`}
          />
          <div>
            <h5 className=" font-semibold text-foreground">{profile?.name}</h5>
            <p className=" text-sm text-muted-foreground">{profile?.email}</p>
          </div>
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
}
