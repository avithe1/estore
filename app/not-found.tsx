"use client";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap:"2rem",
      padding:"2rem"
    }}
    >
      <div
      className="relative flex justify-center size-[200px] sm:size-[300px]"
      >
        <Image
          src="/notfound.svg"
          fill
          alt="Not found page"
          className="object-fill"
          priority
        />
      </div>
      <div className="text-center">The page you are looking for was not found.</div>
    </div>
  );
};

export default NotFound;
