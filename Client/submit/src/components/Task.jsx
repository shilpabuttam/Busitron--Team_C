import React, { useState } from 'react';

export const Task = () => {
  const [started, setStarted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (started) {
      alert('Task stopped!');
    } else {
      alert('Task started!');
    }
    setStarted(!started);
  };

  return (
    <form>
      <button onClick={handleClick}>
        {started ? 'Click to stop' : 'Click to start'}
      </button>
      <p>{started ? 'Task started!' : 'Task stopped!'}</p>
    </form>
  );
};
