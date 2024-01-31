import React from 'react';

const ExchangeList = ({ exchanges }) => {
    return (
        <ul>
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

export default ExchangeList;
