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

fetch('https://api')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem. Maybe you wanna a problem :', error);
  });


export default ExchangeList;
