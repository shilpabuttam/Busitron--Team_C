import React, { useState } from 'react';
import SearchFilters from './SearchFilter';

function SearchPage() {
    const [results, setResults] = useState([]);

    const handleSearch = async (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(`/search?${queryParams}`);
        const data = await response.json();
        setResults(data);
    };

    return (
        <div>
            <SearchFilters onSearch={handleSearch} />
            <div>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <div key={index}>
                            <h3>{result.title}</h3>
                            <p>{result.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
