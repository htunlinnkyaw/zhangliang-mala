"use client";

import useMenuDetail from "../../hooks/useMenuDetail";
import MenuEditForm from "./MenuEditForm";
import MenuEditFormLoader from "./MenuEditFormLoader";

export default function MenuEditSection() {
  const { id, data, isLoading, error } = useMenuDetail();

  return (
    <div className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Edit Menu</h3>
        <p className="text-xs text-muted-foreground">
          All the essential details about this menu in one place.
        </p>
      </div>
      {isLoading ? (
        <MenuEditFormLoader />
      ) : (
        <MenuEditForm MenuEditData={data?.data} />
      )}
    </div>
  );
}
