export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar Skeleton */}
      <div className="h-24 w-full bg-white border-b border-gray-100 flex items-center px-6 lg:px-12">
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
        <div className="ml-auto flex gap-6 hidden md:flex">
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="w-full h-[60vh] bg-gray-200 animate-pulse relative flex items-center justify-center">
         <div className="absolute inset-0 bg-linear-to-b from-gray-200 to-gray-100" />
         <div className="z-10 flex flex-col items-center gap-6 w-full max-w-4xl px-6">
           <div className="w-1/3 h-6 bg-gray-300 rounded animate-pulse" />
           <div className="w-3/4 h-16 sm:h-24 bg-gray-300 rounded animate-pulse" />
           <div className="w-1/2 h-8 bg-gray-300 rounded animate-pulse mt-4" />
         </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col gap-12">
        <div className="w-48 h-10 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse" />
              <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
