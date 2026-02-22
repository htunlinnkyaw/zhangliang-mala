import { MenuDetailType } from "@/types/MenuTypes";

type Props = {
  data: MenuDetailType;
};

export default function MenuDetailCard({
  data: {  title, category, price, image, created_at, updated_at },
}: Props) {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
      <div>
        <p className="text-xs text-muted-foreground mb-1">Name</p>
        <p className="text-xs text-foreground">{title}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Category</p>
        <p className=" text-sm">{category.title}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Price</p>
        <p className=" text-sm text-foreground">{price}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-2">Image</p>

        <img
          src={image ? image : "https://placehold.co/400"}
          alt={title}
          className="w-40 h-24 p-3 object-cover rounded border"
        />
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
