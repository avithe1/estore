"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex items-center mt-4 cursor-pointer" onClick={() => router.back()}>
      <div>
        <ChevronLeft />
      </div>{" "}
      <div>Back</div>
    </div>
  );
};

export default BackButton;
