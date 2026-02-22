import { CategoryDetailType } from "@/types/CategoryTypes";

type Props = {
  data: CategoryDetailType;
};

export default function CategoryDetailCard({
  data: { title, user, created_at, updated_at },
}: Props) {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
      <div className="col-span-2">
        <p className="text-xs text-muted-foreground mb-1">Title</p>
        <p className="text-sm text-foreground">{title}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Created At</p>
        <p className=" text-sm text-foreground">
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Updated At</p>
        <p className=" text-sm text-foreground">
          {new Date(updated_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
