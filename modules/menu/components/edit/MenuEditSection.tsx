"use client";

import useMenuDetail from "../../hooks/useMenuDetail";
import useMenuEdit from "../../hooks/useMenuEdit";

export default function MenuEditSection({ id }: { id: string }) {
  const { menu, isLoading, error } = useMenuDetail(id);
  const { register, handleSubmit, formState: { errors }, onSubmit } = useMenuEdit(menu);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Menu</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input {...register("name")} className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Price</label>
          <input type="number" {...register("price")} className="w-full p-2 border rounded" />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea {...register("description")} className="w-full p-2 border rounded" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("stay_here")} />
          <label>Stay here after update</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("confirm")} />
          <label>Confirm update</label>
          {errors.confirm && <p className="text-red-500 text-sm">{errors.confirm.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Update Menu
        </button>
      </form>
    </div>
  );
}
