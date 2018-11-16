import React from 'react';


const ConvertTimer = (varms)=>{
    let vars = Math.floor (varms / 1000);
    let days = Math.floor (vars / 86400);
    let restday = Math.floor (vars % 86400);
    let hour = Math.floor(restday / 3600);
    let resthour =  Math.floor(restday % 3600);
    let minute  =  Math.floor(resthour / 60);
    let seconde = Math.floor(minute % 60);

    return{
        hour,
        minute,
        seconde
    };
};


const Timer =() => {
    let varms= ConvertTimer(14785624574747484);
    return(
        <div className="styletimer">
        <div className="containertimer">
        <div className="timer">
      <div className="hour forme">
        <span className="numeric">{varms.hour.toString().padStart(2, '0')}:</span>
        <span className="name">Hour</span>
      </div>
      <div className="minut forme">
      <span className="numeric">{varms.minute.toString().padStart(2, '0')}:</span>
      <span className="name">Minut</span>
      </div>
      <div className="second forme">
      <span className="numeric">{varms.seconde.toString().padStart(2, '0')}</span>
      <span className="name">Second</span>
      </div>
    </div></div>
    <div className="button">
    <input type="submit" value="Start"  className="start"></input>
    <input type="submit" value="Reset"  className="reset"></input>
        </div>
        </div>
    )
}
export default Timer


