import React from 'react';

const SortDropdown = ({ handleSort }) => {
    return (
        <select onChange={handleSort}>
            <option value="name">Sort by Name</option>
            <option value="rate">Sort by Rate</option>
        </select>
    );
};

export default SortDropdown;
