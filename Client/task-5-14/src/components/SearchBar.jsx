import React, { useState } from 'react';

const SearchBar = ({ setFilters }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        setFilters(prev => ({ ...prev, search: query }));
    };

    return (
        <div>
            <input type="text" placeholder="Search by username" onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
