"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { formURLQuery } from "@/sanity/utils";

const links = ["Next13", "all", "frontend", "backend", "fullstack"];
const Filters = () => {
  const [active, setActive] = useState<string>("");

  //getting my params from the url
  const searchParams = useSearchParams(); //->ReadonlyURLSearchParams {size: 0}

  //use useRouter to inject the newURL
  const router = useRouter();

  function handleOnFilter(link: string) {
    //as an initial value
    let newURL: string;

    if (active === link) {
      //toggle the button case
      setActive("");
      //sending the (current params) and the (key name of my search parameter) and the (value of the key)
      newURL = formURLQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);

      //sending the (current params) and the (key name of my search parameter) and the (value of the key)

      newURL = formURLQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    // inject the newURL instead of the old one , preventing the scrolling behaviour
    router.push(newURL, { scroll: false });
  }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleOnFilter(link)}
          className={`${active === link ? "gradient_blue-purple" : ""} 
           whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
