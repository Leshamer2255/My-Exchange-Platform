import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar';
import SortDropdown from '../../Components/SortDropdown';
import FilterOptions from '../../Components/FilterOptions';
import ExchangeList from '../../Components/ExchangeList'; 
import styles from '../Home/MainComponent.module.css'; 
import TableComponent from '../../Components/TableComponent';
import PopularComponent from '../../Components/PopularComponent ';

const MainComponent = () => {
    const [exchanges, setExchanges] = useState([
        { id: 1, name: 'Exchange A', rate: 1.2, country: 'USA', currency: 'USD' },
        { id: 2, name: 'Exchange B', rate: 1.5, country: 'EU', currency: 'EUR' },
        { id: 3, name: 'Exchange C', rate: 1.8, country: 'UK', currency: 'GBP' },
    ]);
    const [filteredExchanges, setFilteredExchanges] = useState(exchanges);
    const [popularExchanges, setPopularExchanges] = useState([]);
    const [activeSection, setActiveSection] = useState('list');

    const handleSearch = searchTerm => {
        if (typeof searchTerm === 'string') {
            const filtered = exchanges.filter(exchange =>
                exchange.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredExchanges(filtered);
        }
    };

    const handleSort = sortBy => {
        const sorted = [...filteredExchanges].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else {
                return a.rate - b.rate;
            }
        });
        setFilteredExchanges(sorted);
    };

    const handleFilter = selectedOption => {
        if (selectedOption === 'all') {
            setFilteredExchanges(exchanges); 
        } else {
            const filtered = exchanges.filter(exchange => exchange.currency === selectedOption);
            setFilteredExchanges(filtered);
        }
    };

    const handleSectionChange = section => {
        setActiveSection(section);
    };

    let activeComponent;
    if (activeSection === 'list') {
        activeComponent = <ExchangeList exchanges={filteredExchanges} />;
    } else if (activeSection === 'table') {
        activeComponent = <TableComponent data={filteredExchanges} />;
    } else if (activeSection === 'popular') {
        activeComponent = <PopularComponent data={popularExchanges} />;
    }

    return (
        <div className={styles.mainContainer}> 
            <div className={styles.sidebar}>
                <h1>Exchange Platform</h1>
                <SearchBar handleSearch={handleSearch} />
                <SortDropdown handleSort={handleSort} />
                <FilterOptions handleFilter={handleFilter} />
                <div className={styles.sectionButtons}>
                <button onClick={() => handleSectionChange('table')}>Table </button>
                    <button onClick={() => handleSectionChange('list')}>List </button>
                    <button onClick={() => handleSectionChange('popular')}>Popular </button>
                </div>
                {activeComponent}
            </div>
        </div>
    );
};

export default MainComponent;
