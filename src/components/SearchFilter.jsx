import React from "react";

export default function SearchFilter({ search, setSearch, sortField, setSortField }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by name, role, or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-full p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition w-72"
      />

      {/* Sort dropdown */}
      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
        className="border border-gray-300 rounded-full p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
      >
        <option value="name">Sort by Name</option>
        <option value="joined">Sort by Joining Date</option>
      </select>
    </div>
  );
}
