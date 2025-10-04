import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Admin Page</h1>
      <div className="mt-3 max-w-3xl">
        <Link href="/admin/addproduct">Add a product &gt;</Link>
      </div>
    </div>
  );
};

export default AdminPage;
