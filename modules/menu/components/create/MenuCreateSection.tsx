"use client";
import MenuCreateForm from "./MenuCreateForm";

export default function MenuCreateSection() {
  return (
    <div className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Create new menu</h3>
        <p className="text-xs text-muted-foreground">
          All the essential details about this menu in one place.
        </p>
      </div>
      <MenuCreateForm />
    </div>
  );
}
