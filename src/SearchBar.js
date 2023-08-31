import React, { useState } from 'react';

function SearchBar({ onSearch, onClear }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm); // Call onSearch as the user types
    };

    const handleClear = () => {
        setSearchTerm('');
        onClear();
    };

    return (
        <div>
            <input
                className='search-bar'
                type="text"
                placeholder="Enter a name"
                value={searchTerm}
                onChange={handleInputChange} // Trigger search as the user types
            />
            <button className='clear-btn mx-2' onClick={handleClear}>
                Clear
            </button>
        </div>
    );
}

export default SearchBar;
