import React, { useState } from 'react';
import styles from './SearchBar.module.css'; 

const SearchBar = ({ handleSearch, handleFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [country, setCountry] = useState('');
    const [currency, setCurrency] = useState('');
    const [rating, setRating] = useState('');
    const [commission, setCommission] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        handleSearch(searchTerm);
        handleFilter({ country, currency, rating, commission });
    };

    return (
        <div className={styles.searchBarContainer}> {/* Додайте класи стилів до контейнера */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Country..."
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Currency..."
                    value={currency}
                    onChange={e => setCurrency(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Rating..."
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Commission..."
                    value={commission}
                    onChange={e => setCommission(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
