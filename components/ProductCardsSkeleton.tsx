import React from "react";

const ProductsCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 p-5 mt-10">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="p-2 border rounded border-gray-400 flex flex-col relative min-h-[250px]"
          >
            <div className="relative aspect-square w-[70%] h-[200px] overflow-hidden bg-gray-700 animate-pulse"></div>
            <div className="mt-2">
              <h2 className="text-xl font-bold truncate flex-shrink-0">
                <div className=" bg-gray-700 animate-pulse w-[250px] h-[20px]"></div>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm mt-2 flex-1 overflow-hidden line-clamp-3 width-2/3">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 animate-pulse w-full h-[14px] mt-1"
                    ></div>
                  ))}
              </div>
              <div className="border border-gray-600 p-2 rounded">
                <div className=" bg-gray-700 animate-pulse w-[50px] h-[16px]"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsCardSkeleton;
