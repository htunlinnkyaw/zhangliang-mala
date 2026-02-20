"use client";
import useCustomerDetail from "../../hooks/useCustomerDetail";
import CustomerEditForm from "./CustomerEditForm";
import CustomerEditFormLoader from "./CustomerEditFormLoader";

export default function CustomerEditSection() {
  const { id, data, error, isLoading } = useCustomerDetail();
  return (
    <div className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Edit customer</h3>
        <p className="text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>
      {isLoading ? (
        <CustomerEditFormLoader />
      ) : (
        <CustomerEditForm data={data.data} />
      )}
    </div>
  );
}
