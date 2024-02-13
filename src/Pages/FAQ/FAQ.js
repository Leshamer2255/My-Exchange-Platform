import React, { useState } from 'react';

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How to register on the platform?',
      answer: 'To register, go to the "Registration" page and fill in the required fields.'
    },
    {
      question: 'How to contact support?',
      answer: 'To contact support, use the contact form on the "Contacts" page.'
    },
    
  ];

  return (
    <div>
      <h1>FAQ</h1>
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <h2 onClick={() => handleQuestionClick(index)} style={{ cursor: 'pointer' }}>{item.question}</h2>
          {expandedQuestion === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
