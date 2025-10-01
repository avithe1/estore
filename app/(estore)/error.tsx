"use client";
import React from "react";

const error = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <span className="font-bold text-red-700">Error :</span> Unable to get
      products. Try again later.
    </div>
  );
};

export default error;
