"use client";

import useMenuDetail from "../../hooks/useMenuDetail";
import { useParams } from "next/navigation";

export default function MenuDetailSection() {
  const params = useParams();
  const id = params.id as string;
  const { menu, isLoading, error } = useMenuDetail(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu</div>;
  if (!menu) return <div>Menu not found</div>;

  return (
    <div className="p-4 border rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold">{menu.name}</h2>
      <p className="text-xl text-blue-600 font-semibold mb-4">${menu.price}</p>
      <div className="space-y-2">
        <p><strong>Description:</strong> {menu.description || "No description"}</p>
        <p className="text-gray-500 text-sm">Created at: {new Date(menu.created_at).toLocaleString()}</p>
      </div>
    </div>
  );
}
