import React from 'react';
import "./DisplayLocation.css";
import ShowTime from './TimeComponent';

const seasonConfig = {


  summer:{
    text: "Let's hit the baech", 
    iconClassName: "sun"
  },
  winter:{
    text: "Its cold out there", 
    iconClassName: "snowflake"
  }

};

const determineSeason = (lat, month) =>{
  if(lat > 0 && (month > 2 && month <= 9) ){
      return "winter";
     }
  return "summer";   
}

const DisplayLocation = ( props) => {

  let date =  new Date().getMonth();
   let season = determineSeason(props.lat, date);

   const {text, iconClassName} = seasonConfig[season];
   
  return (
    
    <div className={`display-location ${season}`}>
      <i className={`${iconClassName} massive icon-left icon`}></i>
      <h2>{text}</h2>
      
      <i className={`${iconClassName} massive icon-right icon`}> </i>
      
    </div>
   

  )
}

 export default DisplayLocation;