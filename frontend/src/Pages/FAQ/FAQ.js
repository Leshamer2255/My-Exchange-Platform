import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      question: 'How to register on the platform?',
      answer: 'To register, go to the "Registration" page and fill in the required fields.'
    },
    {
      question: 'How to contact support?',
      answer: 'To contact support, use the contact form on the "Contacts" page.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept payments via credit/debit cards, PayPal, and bank transfers.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search FAQ"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.faqList}>
        {filteredFaqItems.map((item, index) => (
          <div className={styles.faqItem} key={index}>
            <div
              className={`${styles.question} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
