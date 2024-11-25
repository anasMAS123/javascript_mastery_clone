"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { formURLQuery } from "@/sanity/utils";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //technique:using useEffect + setTimeout -> to make a request every time after the query stay unupdated
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newURL: string;
      if (search) {
        newURL = formURLQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newURL = formURLQuery({
          params: searchParams.toString(),
          // i will use this to delete the query paramter if there is no search
          keysToRemove: ["query"],
        });
      }

      router.push(newURL, { scroll: false });
    }, 300);

    // this is very important to write when you deal with setTimeout with useEffect , without it it will ignore the time (300)
    return () => clearTimeout(delayDebounceFn);
  }, [search]);
  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          alt="search icon"
          width={32}
          height={32}
          className="absolute left-8"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
