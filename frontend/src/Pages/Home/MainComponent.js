import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../Components/SearchBar';
import ExchangeList from '../../Components/ExchangeList';
import CryptoNews from '../../Components/CryptoNews';
import styles from '../Home/MainComponent.module.css';
import TableComponent from '../../Components/TableComponent';
import PopularComponent from '../../Components/PopularComponent ';
import ExchangeMonitor from '../../Components/ExchangeMonitor';

const MainComponent = () => {
    const [exchanges, setExchanges] = useState([
        { id: 1, name: 'Exchange A', rate: 1.2, country: 'USA', currency: 'USD', rating: 4, commission: 0.5 },
        { id: 2, name: 'Exchange B', rate: 1.5, country: 'EU', currency: 'EUR', rating: 5, commission: 0.3 },
        { id: 3, name: 'Exchange C', rate: 1.8, country: 'UK', currency: 'GBP', rating: 3, commission: 0.7 },
    ]);
    const [filteredExchanges, setFilteredExchanges] = useState(exchanges);
    const [popularExchanges, setPopularExchanges] = useState([]);
    const [activeSection, setActiveSection] = useState('list');
    const [currencyRates, setCurrencyRates] = useState([]);
    const [cryptoNews, setCryptoNews] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetchCurrencyRates();
        fetchCryptoNews();
    }, []);

    useEffect(() => {
        setRecommendations(filteredExchanges);
    }, [filteredExchanges]);

    const fetchCurrencyRates = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => {
                setCurrencyRates(data.rates);
            })
            .catch(error => console.error('Error fetching currency rates:', error));
    };

    const fetchCryptoNews = () => {
        fetch('https://www.coingecko.com/api/v3/news')
            .then(response => response.json())
            .then(data => {
                setCryptoNews(data.articles);
            })
            .catch(error => console.error('Error fetching crypto news:', error));
    };

    const handleSearch = useMemo(
        () => searchTerm => {
            if (typeof searchTerm === 'string') {
                const filtered = exchanges.filter(exchange =>
                    exchange.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredExchanges(filtered);
            }
        },
        [exchanges]
    );

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

    const handleFilter = ({ country, currency, rating, commission }) => {
        let filtered = [...exchanges];

        if (country) {
            filtered = filtered.filter(exchange => exchange.country.toLowerCase() === country.toLowerCase());
        }
        if (currency) {
            filtered = filtered.filter(exchange => exchange.currency.toLowerCase() === currency.toLowerCase());
        }
        if (rating) {
            filtered = filtered.filter(exchange => exchange.rating === parseInt(rating));
        }
        if (commission) {
            filtered = filtered.filter(exchange => exchange.commission === parseFloat(commission));
        }

        setFilteredExchanges(filtered);
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
            <div className={`${styles.sidebar} ${activeSection === 'table' || activeSection === 'list' ? styles.animate : ''}`}>
                <h1>Exchange Platform</h1>
                <SearchBar handleSearch={handleSearch} handleFilter={handleFilter} />
                <div className={styles.sectionButtons}>
                    <button onClick={() => handleSectionChange('table')}>Table </button>
                    <button onClick={() => handleSectionChange('list')}>List </button>
                    <button onClick={() => handleSectionChange('popular')}>Popular </button>
                </div>
                {activeComponent}
            </div>
            <div className={styles.content}>
                <ExchangeMonitor />
                <CryptoNews news={cryptoNews} />
                <div>
                    <h2>Recommendations</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {recommendations.map(recommendation => (
                            <li key={recommendation.id}>{recommendation.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

MainComponent.propTypes = {};

export default MainComponent;
