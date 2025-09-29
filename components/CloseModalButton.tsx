"use client";

import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModalButton = () => {
  const router = useRouter();
  return (
    <div className="flex items-center mt-4 justify-end">
      <div
        className="size-[30px] flex justify-center cursor-pointer items-center "
        onClick={(e) => { e.stopPropagation(); router.back()}}
      >
        <X />
      </div>
    </div>
  );
};

export default CloseModalButton;
