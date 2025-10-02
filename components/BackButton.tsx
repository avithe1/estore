"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className="flex items-center mt-4 cursor-pointer ml-3 px-1" onClick={() => router.back()}>
      <div>
        <ChevronLeft />
      </div>{" "}
      <div>Back</div>
    </button>
  );
};

export default BackButton;
