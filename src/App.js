import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home/MainComponent';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import MainComponent from './Pages/Home/MainComponent';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes> 
          <Route path="/" element={<MainComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
