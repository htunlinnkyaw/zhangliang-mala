"use client";

import Link from "next/link";
import MenuDetailCard from "./MenuDetailCard";
import MenuDetailCardLoader from "./MenuDetailCardLoader";
import { Button } from "@/components/ui/button";
import useMenuDetail from "../../hooks/useMenuDetail";

export default function MenuDetailSection() {
  const { id, data, error, isLoading } = useMenuDetail();
  return (
    <section className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Menu Detail</h3>
        <p className="text-xs text-muted-foreground">
          Find everything you need to know about this menu right here.
        </p>
      </div>
      {isLoading ? (
        <MenuDetailCardLoader />
      ) : (
        <MenuDetailCard data={data.data} />
      )}
      <div className="flex gap-1">
        <Link href={`/dashboard/menus`}>
          <Button variant={"outline"} size={"sm"}>
            All Customer
          </Button>
        </Link>
        <Link href={`/dashboard/customers/${id}/edit`}>
          <Button variant={"outline"} size={"sm"}>
            Edit Customer
          </Button>
        </Link>
      </div>
    </section>
  );
}
