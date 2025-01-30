import React from 'react';

const Filter = ({ setFilters }) => {
    return (
        <div>
            <select onChange={(e) => setFilters(prev => ({ ...prev, timeframe: e.target.value }))}>
                <option value="">All Time</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
            </select>
        </div>
    );
};

export default Filter;
