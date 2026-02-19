import { customerGenders } from "@/lib/constants";
import z from "zod";

export const customerCreateFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  date_of_birth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  address: z.string().min(1, "Address is required"),
  gender: z
    .enum(customerGenders)
    .or(z.literal(""))
    .refine((val) => val !== "", {
      message: "Please select gender",
      path: ["gender"],
    }),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new customer",
    path: ["confirm"],
  }),
});

export default function useCustomerCreate() {
  return <div>useCustomerCreate</div>;
}
