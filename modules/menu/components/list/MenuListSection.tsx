import { Suspense } from "react";
import MenuTable from "./MenuTable";

export default function MenuListSection() {
  return (
    <div className="container mx-auto py-3 flex flex-col gap-4">
      <div className="">
        <h3 className="text-xl font-semibold mb-1">Customer Lists</h3>
        <p className="text-xs text-muted-foreground">
          View comprehensive customer information conveniently here.
        </p>
      </div>
      <Suspense>
        <MenuTable />
      </Suspense>
    </div>
  );
}
