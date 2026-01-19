export const UsersSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
      <div className="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between">
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-2">
                  <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
