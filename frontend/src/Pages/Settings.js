import React, { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);

    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
       
    };

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <h3>Theme:</h3>
                <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <h3>Language:</h3>
                <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;
