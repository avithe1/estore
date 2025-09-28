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
          !isOpen ? "w-[0px] border-0" : " w-[200px] px-4 py-0.2 "
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search
        className="cursor-pointer"
        onClick={
          isOpen
            ? handleSearch
            : () => {
                setIsOpen(true);
                document.getElementById("myInput")?.focus();
              }
        }
      />
      <X
        onClick={clear}
        className={`${isOpen ? "block" : "hidden"} cursor-pointer`}
      />
    </div>
  );

  // return !isOpen ? (
  //   <Search onClick={() => setIsOpen(true)} />
  // ) : (
  //   <div className="flex items-center gap-2">
  //     <input
  //       className="border border-gray-700 rounded w-[200px] px-2 py-0.2"
  //       autoFocus
  //       value={search}
  //       onChange={(e) => setSearch(e.target.value)}
  //     />
  //     <Search onClick={handleSearch} />
  //     <X onClick={clear} />
  //   </div>
  // );
};

export default NavSearch;
