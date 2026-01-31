"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Limit = ({ initialLimit }) => {
  const router = useRouter();
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    setLimit(initialLimit);
  }, [initialLimit]);

  const handleLimitChange = (e) => {
    const newLimit = e.target.value;
    setLimit(newLimit);
    const params = new URLSearchParams(window.location.search);
    params.set('limit', newLimit);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative">
      <select
        value={limit}
        onChange={handleLimitChange}
        className="appearance-none px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
      >
        <option value="10">10 </option>
        <option value="20">20 </option>
        <option value="40">40 </option>
        <option value="60">60 </option>
        <option value="100">100 </option>
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Limit;