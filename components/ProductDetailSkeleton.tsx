const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-10 gap-3 max-w-3xl mx-auto">
      <h1 className="mt-2 text-2xl font-bold w-[50%] h-[25px]  bg-gray-700 animate-pulse"></h1>
      <div className="relative md:h-[200px] md:w-[200px] h-[250px] w-[150px] aspect-square overflow-hidden bg-gray-700 animate-pulse mt-5 mb-5"></div>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[95%] h-[10px] bg-gray-700 animate-pulse"
          ></div>
        ))}
        <div
            className="w-[30%] h-[10px] bg-gray-700 animate-pulse"
          ></div>
      {/* <div className="mt-3">
        <button className="border border-white rounded bg-gray-700 px-2 py-1 animate-pulse w-[100px] h-[40px]"></button>
      </div> */}
    </div>
  );
};

export default ProductDetailsSkeleton;
