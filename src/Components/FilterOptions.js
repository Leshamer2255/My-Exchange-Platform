import React from 'react';

const FilterOptions = ({ handleFilter }) => {
    const handleChange = event => {
        const selectedOption = event.target.value;
        handleFilter(selectedOption);
    };

    return (
        <div>
            <label>
                <input type="checkbox" value="USD" onChange={handleChange} />
                USD
            </label>
            <label>
                <input type="checkbox" value="EUR" onChange={handleChange} />
                EUR
            </label>
        </div>
    );
};

export default FilterOptions;
