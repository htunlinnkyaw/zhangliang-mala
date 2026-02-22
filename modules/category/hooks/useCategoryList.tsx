import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function useCategoryList() {
    const searchParams = useSearchParams();

    const fetchUrl = searchParams.toString()
        ? `${categoryApiUrl}?${searchParams.toString()}`
        : categoryApiUrl;

    const swr = useSWR(fetchUrl, fetcher);

    return { ...swr };
}
