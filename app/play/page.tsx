'use client';
import React, { useState } from 'react';
import './styles.css';
import type { Character } from './story';
import { characters } from './story';

type TimelineEvent = {
  time: string;
  content: string;
  character?: Character;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      time: '1955',
      content: "Marty arrives in 1955 and stumbles upon his father, George, spying on his future mother.George, startled, falls from the tree. Marty saves him from a car, getting hit himself.Later, in Lorraine’s house, Marty wakes up to Lorraine."
    },
    {
      time: '1955',
      content: "Lorraine: I'm Lorraine. You're safe. My dad hit you with the car.",
      character: characters['Lorraine']
    }
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const playerCharacter = characters['Marty'];

  const onContinue = () => {
    // Implement logic here for what should happen when user clicks continue
    // For example, adding a new event to the timeline
    // ...

    alert('Continue clicked! Implement action here.');
  };

  const onTimeTravel = () => {
    // Logic for time travel button
    alert('Time Travel clicked! Implement action here.');
  };

  return (
    <div className="App">
      {events.map((event, index) => {
        let timePoint = null
        if (index === 0) {
          timePoint = <div className='time-point'>{event.time}</div>
        }
        return (
          <>
            {timePoint}
            <div key={index} className="event-card">
              <div className='timeline-line'></div>
              <div className="event-info">
                {event.character && <img src={event.character.avatar} alt="Avatar" className="avatar" style={{ borderColor: event.character.color }} />}
                <div className="event-content"
                  style={event.character ? { backgroundColor: event.character.color } : {}}
                >
                  {event.content}
                </div>
              </div>
            </div>
          </>
        )
      })}
      <div className="event-card">
        <div className='timeline-line'></div>
        <div className="event-info">
          {playerCharacter && <img src={playerCharacter.avatar} alt="Avatar" className="avatar" style={{ borderColor: playerCharacter.color }} />}
          <div className="event-content" style={playerCharacter ? { backgroundColor: playerCharacter.color } : {}}>
            <div className="interaction-tip">
              What will you do next?
            </div>
            <textarea
              className="user-input"
              placeholder="Enter your response or action..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div className="buttons">
              <button onClick={onContinue} className="button continue-button">Continue</button>
              <button onClick={onTimeTravel} className="button time-travel-button">Time travel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
