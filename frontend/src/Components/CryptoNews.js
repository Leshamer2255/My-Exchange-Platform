import React from 'react';

const CryptoNews = ({ news }) => {
    return (
        <div>
            <h2>Crypto News</h2>
            <ul>
                {news.map(article => (
                    <li key={article.id}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoNews;
