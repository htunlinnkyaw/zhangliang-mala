import { menuCreateFormSchema } from "@/modules/menu/hooks/useMenuCreate";
import { menuEditFormSchema } from "@/modules/menu/hooks/useMenuEdit";
import z from "zod";
import { User } from "./UserTypes";

export type MenuCreateFormValues = z.infer<typeof menuCreateFormSchema>;
export type MenuEditFormValues = z.infer<typeof menuEditFormSchema>;

export type MenuStorePayloadValues = Omit<
  MenuCreateFormValues,
  "confirm" | "stay_here"
>;
export type MenuUpdatePayloadValues = Omit<
  MenuEditFormValues,
  "confirm" | "stay_here"
>;

export type MenuDetailType = MenuStorePayloadValues & {
    id: number,
    user: User,
    created_at: string,
    updated_at: string
};
