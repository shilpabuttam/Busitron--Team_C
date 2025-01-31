import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const timeRemaining = new Date(targetDate) - new Date();
            if (timeRemaining <= 0) {
                clearInterval(interval);
                setTimeLeft("Event has ended");
            } else {
                const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                setTimeLeft(`${hours}h : ${minutes}m : ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-timer">
            <p className='timeLeft' style={{color:"white",fontSize:"20px"}}><strong>⏰Closed in : </strong> {timeLeft}</p>
        </div>
    );
};

export default CountdownTimer;
