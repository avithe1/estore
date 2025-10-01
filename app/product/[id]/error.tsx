"use client";
import React from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <div>
        <span className="font-bold text-red-700">Error:</span>&nbsp;
        {error.message}
      </div>
      <div>
        <button
          className="rounded px-3 py-1 border border-white hover:bg-gray-900 cursor-pointer"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Error;
