import React, { useState } from 'react';

import InputColumnLayout from './components/input';

import logo from './logo.svg';
import remove_icon from './images/icons8-remove-26.png';
import add_icon from './images/icons8-add-32.png';
import rocket_icon from './images/icons8-rocket-53.png';
import enter_icon from './images/icons8-enter-48.png';


import './App.css';

function App() {
  const [boxNumber, setBoxNumber] = useState(1);
  const [sendData, setSendData] = useState(false);

  return (
    <div class="grid-container">
        <h1 id="title" class="grid-item">ScheduleGPT</h1>
        <InputColumnLayout
          inputBoxNumber={boxNumber}
          sendData={sendData}
          setSendData={setSendData}
        />
        <img
          id="add-button"
          src={add_icon}
          onClick={() => {
            setBoxNumber(boxNumber+1);
          }}
        />

        <img
          id="launch-button"
          src={rocket_icon}
          onClick={() => {
            setSendData(true);
          }}
        /> 
        
        <div id="calendar-preview" class="grid-item">
            Calendar Preview Here
        </div>

        <div id="chat-box" class="grid-item">
            <input type = "text" id = "chat-box-text" placeholder = "Describe any changes you want to make" />
            <a>
                <img id='enter-button' src={enter_icon}/>
            </a>
        </div>
    </div>
  );
}

export default App;
