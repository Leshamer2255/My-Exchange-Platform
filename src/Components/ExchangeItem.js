import React from 'react';

const ExchangeItem = ({ exchange }) => {
    return (
        <div>
            <h3>{exchange.name}</h3>
            <p>Rate: {exchange.rate}</p>
          
        </div>
    );
};

export default ExchangeItem;
