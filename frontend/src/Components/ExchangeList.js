import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExchangeList.module.css';

const ExchangeList = ({ exchanges }) => {
    if (!exchanges || exchanges.length === 0) {
        return <p>No exchanges found</p>;
    }

    return (
        <ul className={styles.exchangeList}>
            <h1>List</h1>
            {exchanges.map(exchange => (
                <li key={exchange.id}>
                    <div>Name: {exchange.name}</div>
                    <div>Rate: {exchange.rate}</div>
                    <div>Country: {exchange.country}</div>
                    <div>Currency: {exchange.currency}</div>
                </li>
            ))}
        </ul>
    );
};

ExchangeList.propTypes = {
    exchanges: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
            country: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ExchangeList;
