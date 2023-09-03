import React, { useState } from 'react';

function SearchBar({ onSearch, onClear }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
         // Call onSearch as the user types
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                className='search-bar'
                type="text"
                placeholder="Enter VIP name"
                value={searchTerm}
                onChange={handleInputChange} // Trigger search as the user types
            />
            <button className='clear-btn mx-2' onClick={handleClear}>
                Submit
            </button>
        </div>
    );
}

export default SearchBar;
