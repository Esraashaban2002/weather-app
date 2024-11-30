import React, { useState } from 'react';
import './weather.css'
function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='search-bar'>
            <input
                type="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city name" required
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
