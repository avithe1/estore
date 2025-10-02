"use client";
import CloseModalButton from "@/components/CloseModalButton";
import { Modal } from "@/components/ProductModal";
import React from "react";

const error = ({
  error,
  //reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <Modal>
      <CloseModalButton />
      <div className="w-full h-full flex justify-center items-center">
        {error.message}
      </div>
    </Modal>
  );
};

export default error;
