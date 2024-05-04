const Shimmer = () => {
  return (
  <div className="flex flex-nowrap gap-4">
    <div className="content box-border border-3 w-64 p-4 rounded-md shadow-md bg-slate-100 hover:shadow-lg transition duration-300 ease-in-out -translate-y-1 ">
      <div className="skeleton-image bg-gray-300 h-40 mb-4"></div>
      <div className="skeleton-text bg-gray-300 h-4 w-1/2 mb-2"></div>
      <div className="skeleton-text bg-gray-300 h-4 w-[60px] mb-2"></div>
      <div className="skeleton-text bg-gray-300 h-6 w-6/6"></div>
    </div>
  </div>
  );
};

export default Shimmer;
