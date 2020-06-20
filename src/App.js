import React,{useState} from 'react';
import {Message} from './message.js';
import './App.css';

export default function App() {
  let[count,setCount]=useState(0);
  let[isMorning,setMorning]=useState(true);


  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h2> Daytime={isMorning ? 'Morning':'Night'}</h2>
      <Message counter={count}/>

      <h3>The value of counter is {count}</h3>
      
      <br/>

        <button onClick={()=>setCount(++count)}>
            
            Click to Increment
        </button>
        <br/>
        <button onClick={()=>setMorning(!isMorning)}>
          Update Day
        </button>
     
    </div>
  );
}


