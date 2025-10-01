const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-10 gap-3">
      <h1 className="mt-2 text-2xl font-bold w-[50%] h-[20px]  bg-gray-700 animate-pulse"></h1>
      <div className="relative h-[200px] w-[200px] aspect-square overflow-hidden bg-gray-700 animate-pulse mt-5 mb-5"></div>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="text-sm w-[95%] h-[16px]  bg-gray-700 animate-pulse"
          ></div>
        ))}
      {/* <div className="mt-3">
        <button className="border border-white rounded bg-gray-700 px-2 py-1 animate-pulse w-[100px] h-[40px]"></button>
      </div> */}
    </div>
  );
};

export default ProductDetailsSkeleton;
