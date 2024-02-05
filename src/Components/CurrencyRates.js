import React from 'react';

const CurrencyRates = ({ rates }) => {
    if (!rates) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <h2>Currency Rates</h2>
            <ul>
                {Object.keys(rates).map(currency => (
                    <li key={currency}>{currency}: {rates[currency]}</li>
                ))}
            </ul>
        </div>
    );
};

export default CurrencyRates;
