import React from "react";

const FilterBar = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      {/* Genre Filter */}
      <select name="genre" onChange={handleFilterChange}>
        <option value="">All Genres</option>
        <option value="comedy">Comedy</option>
        <option value="science">Science</option>
        <option value="music">Music</option>
        <option value="documentary">Documentary</option>
      </select>

      {/* Region Filter */}
      <select name="region" onChange={handleFilterChange}>
        <option value="">All Regions</option>
        <option value="NA">North America</option>
        <option value="EU">Europe</option>
        <option value="IN">India</option>
        <option value="KR">Korea</option>
      </select>
    </div>
  );
};

export default FilterBar;
