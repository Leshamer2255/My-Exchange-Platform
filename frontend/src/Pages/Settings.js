import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings = ({ onSave }) => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleSave = () => {
        onSave({ theme, language });
    };

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>
            <div>
                <label htmlFor="theme">Theme:</label>
                <select id="theme" value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                </select>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Settings;
