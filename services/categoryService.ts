import {
  CategoryStorePayloadValues,
  CategoryUpdatePayloadValues,
} from "@/types/CategoryTypes";
import { getCookie } from "react-use-cookie";

export const categoryApiUrl =
  process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/categories";

export function storeCategory(
  payload: CategoryStorePayloadValues,
): Promise<Response> {
  return fetch(`${categoryApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function updateCategory(
  payload: CategoryUpdatePayloadValues,
  id: number,
): Promise<Response> {
  return fetch(`${categoryApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function deleteCategory(id: number): Promise<Response> {
  return fetch(`${categoryApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}
