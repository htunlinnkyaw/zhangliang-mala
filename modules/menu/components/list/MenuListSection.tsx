"use client";

import useMenuList from "../../hooks/useMenuList";

export default function MenuListSection() {
  const { data, error, isLoading } = useMenuList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menus</div>;

  return <></>;
}
