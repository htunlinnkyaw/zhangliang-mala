import { fetcher } from "@/lib/fetcher";
import { menuApiUrl } from "@/services/menuService";
import useSWR from "swr";

export default function useMenuDetail(id: string) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `${menuApiUrl}/${id}` : null,
    fetcher
  );

  return {
    menu: data?.data,
    isLoading,
    error,
    mutate,
  };
}
