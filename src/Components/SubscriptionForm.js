import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [selectedNotifications, setSelectedNotifications] = useState([]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNotificationChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedNotifications((prevSelected) => [...prevSelected, value]);
        } else {
            setSelectedNotifications((prevSelected) =>
                prevSelected.filter((notification) => notification !== value)
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Selected Notifications:', selectedNotifications);
        setEmail('');
        setSelectedNotifications([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Subscribe to Notifications</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div>
                <p>Choose notifications:</p>
                <label>
                    <input
                        type="checkbox"
                        value="price_changes"
                        checked={selectedNotifications.includes('price_changes')}
                        onChange={handleNotificationChange}
                    />
                    Price Changes
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="new_exchanges"
                        checked={selectedNotifications.includes('new_exchanges')}
                        onChange={handleNotificationChange}
                    />
                    New Exchanges
                </label>
                <br />
            </div>
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default SubscriptionForm;
