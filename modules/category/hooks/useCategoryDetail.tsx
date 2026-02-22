import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function useCategoryDetail() {
    const { id } = useParams();
    const swr = useSWR(`${categoryApiUrl}/${id}`, fetcher);

    return {
        id,
        ...swr,
    };
}
