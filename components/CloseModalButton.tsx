"use client";

import React from "react";
import { Share, X } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModalButton = () => {
  const router = useRouter();
  return (
    <div className="flex items-center mr-4 justify-end gap-4">
      <div className="size-[30px]">
        <button
          className="h-full w-full flex justify-center items-center cursor-pointer focus:bg-hovercolor hover:bg-hovercolor rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            router.back();
          }}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default CloseModalButton;
