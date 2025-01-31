import React, { useState } from 'react';
import EventCard from '../components/Eventcard';
import CountdownTimer from '../components/CountdownTimer';
import Notification from '../components/Notification';
import './Home.css';

const Home = () => {
    const [playerProgress, setPlayerProgress] = useState({
        winterFestival: { tasksCompleted: 2, totalTasks: 5 },
        springChallenge: { tasksCompleted: 3, totalTasks: 5 },
    });

    const eventAnnouncements = [
        // "New Winter Festival event starting tomorrow!",
        // "Spring Challenge extended until April 10th!",
        "🏅Spring Challenge is closed soon please play and win rewards!!🏅"
    ];

    const events = [
        {
            id: 1,
            name: "Winter Festival 🀩",
            description: "A special winter event with unique rewards!",
            startDate: "2025-01-01",
            endDate: "2025-01-31",
            reward: "Exclusive Winter Skin",
            progress: playerProgress.winterFestival,
        },
        {
            id: 2,
            name: "Spring Challenge 🀦",
            description: "A spring challenge event with awesome rewards!",
            startDate: "2025-01-31",
            endDate: "2025-02-02",
            reward: "Exclusive Spring Skin",
            progress: playerProgress.springChallenge,
        },
    ];

    const getReward = (progress) => {
        if (progress.tasksCompleted === progress.totalTasks) {
            return "Exclusive Skin Unlocked!";
        }
        return "Keep going to unlock rewards!";
    };

    return (
        <div>
            <div className='announcements'>
            {eventAnnouncements.map((announcement, index) => (
                <Notification key={index} message={announcement} />
            ))}
            </div>

            <h1 className='title'>Game Event System🎯</h1>
           <div className='typesOfEvents'>
           {events.map((event) => (
                <div key={event.id} className='eventDetails'>
                    <EventCard event={event} />
                    <h3>{getReward(event.progress)}</h3>
                    <h4>Progress: {event.progress.tasksCompleted}/{event.progress.totalTasks} Tasks Completed</h4>
                    <progress value={(event.progress.tasksCompleted / event.progress.totalTasks) * 100} max="100"></progress>
                    <CountdownTimer targetDate={event.endDate} />
                </div>
            ))}
            </div> 
            
        </div>
    );
};

export default Home;
