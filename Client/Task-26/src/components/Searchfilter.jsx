import React, { useState } from 'react';

function SearchFilters({ onSearch }) {
    const [filters, setFilters] = useState({
        genre: '',
        language: '',
        minDuration: '',
        maxDuration: '',
        rating: '',
        releaseDate: '',
        sort: 'popularity'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters); // Pass the filters to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Genre</label>
                <select name="genre" onChange={handleChange} value={filters.genre}>
                    <option value="">Select Genre</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Action">Action</option>
                </select>
            </div>
            <div>
                <label>Language</label>
                <select name="language" onChange={handleChange} value={filters.language}>
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
            <div>
                <label>Duration (minutes)</label>
                <input
                    type="number"
                    name="minDuration"
                    value={filters.minDuration}
                    onChange={handleChange}
                    placeholder="Min"
                    min="0"
                />
                <input
                    type="number"
                    name="maxDuration"
                    value={filters.maxDuration}
                    onChange={handleChange}
                    placeholder="Max"
                    min="0"
                />
            </div>
            <div>
                <label>Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={filters.rating}
                    onChange={handleChange}
                    placeholder="0-10"
                    min="0"
                    max="10"
                />
            </div>
            <div>
                <label>Release Date</label>
                <input
                    type="date"
                    name="releaseDate"
                    value={filters.releaseDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Sort By</label>
                <select name="sort" onChange={handleChange} value={filters.sort}>
                    <option value="popularity">Popularity</option>
                    <option value="trending">Trending</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchFilters;
