import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home/MainComponent';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import MainComponent from './Pages/Home/MainComponent';
import Contacts from './Pages/Contacts/Contacts';
import FAQ from './Pages/FAQ/FAQ';
import RegistrationForm from './Pages/Registration/RegistrationForm';
import Settings from './Pages/Settings';


const App = () => {

 
  const handleSaveSettings = (theme) => {
    // Додайте обробник для збереження налаштувань тут
    console.log('Theme saved:', theme);
};
  
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes> 
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<MainComponent />} />
          <Route path="/settings" element={<Settings onSave={handleSaveSettings}/>} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
