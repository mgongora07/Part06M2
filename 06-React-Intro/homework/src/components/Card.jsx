import React from 'react';

export default function Card(props) {
  // acá va tu código
  return(
    <div>
    <button onClick={props.onClose}>x</button>
    <h3>{props.name}</h3>
    <div> 
    <p> Min</p>
    <p>{props.min}</p>
    </div>
    <div>
    <p> Max</p>
    <p>{props.max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
    </div>
  )
};