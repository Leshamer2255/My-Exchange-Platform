import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home/MainComponent';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import MainComponent from './Pages/Home/MainComponent';
import Contacts from './Pages/Contacts/Contacts';
import FAQ from './Pages/FAQ/FAQ';


const App = () => {

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
    <Router>
      <div className="app-container">
        <Header />
        <Routes> 
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ faqItems={faqItems} />} />
          <Route path="/" element={<MainComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
