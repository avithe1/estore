"use client";
import {
  clearSearchTerm,
  setSearchTerm,
} from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
const NavSearch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    let s = search.trim();
    if (s.length) {
      console.log("handleSearch set search term : ", s);
      dispatch(setSearchTerm({ search: s }));
      setIsOpen(false);
      setSearch("");
    }
  };

  const clear = () => {
    setIsOpen(false);
    setSearch("");
    dispatch(clearSearchTerm());
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id="myInput"
        className={` transition-all duration-150 border border-gray-700 rounded-full  ${
          !isOpen ? "w-[0px] border-0" : "w-[80px] sm:w-[200px] px-4 py-0.2 "
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        tabIndex={isOpen?0:-1}
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
        <Search className="size-4 sm:size-6"/>
      </button>
      <button
        aria-label="close search"
        className={`${isOpen ? "block" : "hidden"} cursor-pointer`}
        onClick={clear}
      >
        <X className="size-4 sm:size-6"/>
      </button>
    </div>
  );
};

export default NavSearch;
