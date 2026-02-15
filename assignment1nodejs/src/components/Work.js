import React, { useState } from 'react';
import './Work.css';
const Work = () => {
  const [text, setText] = useState('');
  const [editable, setEditable] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const handleWrite = () => {
    setEditable(true);
  };
  const handleRead = () => {
    setEditable(false);
    setDisplayText(text);
  };
  return (
    <div className="work-page"> 
    <div className="work-container">
    <h2 className="work-heading">Fs work with React</h2>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} disabled={!editable} placeholder="Enter text here" className="work-input"/>
    <button onClick={handleWrite} className="work-button">Write</button>
    <button onClick={handleRead} className="work-button">Read</button>
    {displayText && (
    <div className="work-display">
    <p>{displayText}</p>
    </div>
    )}
    </div>
    </div>
  );
};
export default Work;
