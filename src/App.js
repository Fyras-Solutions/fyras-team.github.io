import React, { useEffect, useState } from "react";
import InternCard from "./components/InternCard";
import SearchFilter from "./components/SearchFilter";
import "./App.css"; // Tailwind CSS
import internsData from "./data/interns";

function App() {
  const [interns, setInterns] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");

  // Load interns from a local static list (no backend)
  useEffect(() => {
    setInterns(internsData);
  }, []);

  // Filter interns based on search
  const filtered = interns.filter((i) => {
    const lower = search.toLowerCase();
    return (
      i.name.toLowerCase().includes(lower) ||
      i.role.toLowerCase().includes(lower) ||
      i.skills.some((s) => s.toLowerCase().includes(lower))
    );
  });

  // Sort interns
  const sorted = filtered.sort((a, b) => {
    if (sortField === "name") return a.name.localeCompare(b.name);
    if (sortField === "joined") return new Date(a.joined) - new Date(b.joined);
    return 0;
  });

  return (
    <div className="container mx-auto p-6">

      {/* Page header */}
      <h1 className="text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
        Meet Our Team
      </h1>

      {/* Search + Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        sortField={sortField}
        setSortField={setSortField}
      />

      {/* Intern Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {sorted.map((intern) => (
          <InternCard key={intern.name} intern={intern} />
        ))}
      </div>
    </div>
  );
}

export default App;
