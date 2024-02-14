import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = ({ faqItems }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortingCriteria, setSortingCriteria] = useState('default');

  const handleQuestionClick = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSorting = (e) => {
    setSortingCriteria(e.target.value);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  const sortedFaqItems = [...filteredFaqItems].sort((a, b) => {
    if (sortingCriteria === 'alphabetical') {
      return a.question.localeCompare(b.question);
    } else {
      return a.question.localeCompare(b.question);
    }
  });

  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search FAQ"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortingCriteria} onChange={handleSorting}>
          <option value="default">Default</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      {sortedFaqItems.map((item, index) => (
        <div className={styles.faqItem} key={index}>
          <h2 className={styles.question} onClick={() => handleQuestionClick(index)}>
            {item.question}
          </h2>
          {expandedQuestion === index && <p className={styles.answer}>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
