import React from 'react';

const SearchBar = ({ handleSearch }) => {
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
           
        </div>
    );
};

export default SearchBar;
