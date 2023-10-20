
import './App.scss';
import { useState,useEffect } from 'react';

const audioClips = [
  {
      "key": "Q",
      "song": "Heater-1",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
      "key": "W",
      "song": "Heater-2",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
      "key": "E",
      "song": "Heater-3",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
      "key": "A",
      "song": "Heater-4",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
      "key": "S",
      "song": "Heater-6",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
      "key": "D",
      "song": "Dsc_Oh",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
      "key": "Z",
      "song": "Kick_n_Hat",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
      "key": "X",
      "song": "RP4_KICK_1",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
      "key": "C",
      "song": "Cev_H2",
      "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];  


function App() {
  const [Note, setNote] = useState("");

  return (
    <div className="App" id="drum-machine">
      <header className="App-header">
        <div id='display'>
          {Note}
        </div>
        <h2>Drum Machine</h2>
        {
          audioClips.map(clip => [
            <Pad setNote ={setNote} key={clip.id} clip={clip}/>
          ])
        }
      </header>
    </div>
  );
}

function Pad({clip,setNote}){

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    }
  },)
  
  const handlePress = (e) => {
    if (e.key.toUpperCase() === clip.key) {
      playSound();
    }
  }

  const playSound = () => {
    setNote(clip.key);
    const audioTag = document.getElementById(clip.key);
    audioTag.currentTime = 0;
    audioTag.play();
    clearTimeout(playSound,50);
  }

  return (
    <div onClick={playSound} id={clip.song} className='drum-pad'>
      <audio className="clip" id={clip.key} src={clip.url}/>
      {clip.key}
    </div>
  );
}

export default App;
