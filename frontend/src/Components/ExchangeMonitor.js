import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import styles from '../Components/ExchangeMonitor.module.css'; 

const ExchangeMonitor = () => {
    return (
        <div className={styles.exchangeMonitor}>
            <h1>Exchange Monitor</h1>
            <SubscriptionForm />
            <div className={styles.information}>
                Information is here right now, check the home page  
            </div>
        </div>
    );
};

export default ExchangeMonitor;
