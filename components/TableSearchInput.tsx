"use client";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

type Props = {
  placeholder?: string;
};

export default function TableSearchInput({
  placeholder = "Search ...",
}: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");

  const debouncedChange = useMemo(() => {
    return debounce((searchValue: string) => {
      if (searchValue) {
        router.push(`${pathName}?q=${searchValue}`);
      } else {
        router.push(`${pathName}`);
      }
    }, 500);
  }, [router, pathName]);

  // sync states when query param changes
  useEffect(() => {
    const query = searchParams.get("q") ?? "";
    setValue(query);
  }, [searchParams]);

  // cleanup debounce
  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedChange(newValue);
  };

  return (
    <div className="relative">
      <Input
        value={value}
        onChange={handleChange}
        className="h-7 w-48"
        placeholder={placeholder}
      />
      <Button
        onClick={() => router.push(pathName)}
        size={"sm"}
        className={`${value ? "scale-100 pointer-events-auto" : "scale-0 pointer-events-none"} duration-150 absolute rounded-full size-4 p-0 top-0 right-0 -translate-y-1/2 translate-x-1/2`}
      >
        <X className="size-2" />
      </Button>
    </div>
  );
}
