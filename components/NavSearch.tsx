"use client";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/lib/utils";
const NavSearch = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    if (search.trim().length) {
      router.replace(
        createQueryString(search.trim(), searchParam.get("sort") || "")
      );
      setIsOpen(false);
      setSearch("");
    }
  };

  const clear = () => {
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="Search input"
        className={` transition-all duration-150 border border-gray-700 rounded-full  ${
          !isOpen ? "w-[0px] border-0" : "w-[80px] sm:w-[200px] px-4 py-0.2 "
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        tabIndex={isOpen ? 0 : -1}
      />
      <button
        aria-label="search"
        className="cursor-pointer"
        onClick={
          isOpen
            ? handleSearch
            : () => {
                setIsOpen(true);
                document.getElementById("myInput")?.focus();
              }
        }
      >
        <Search className={`size-4 sm:size-6 ${isOpen?"text-blue-500 animate-pulse":""}`} />
      </button>
      <button
        aria-label="close search"
        className={`${isOpen ? "block" : "hidden"} cursor-pointer`}
        onClick={clear}
      >
        <X className="size-4 sm:size-6" />
      </button>
    </div>
  );
};

export default NavSearch;
