import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import SetTimer from './Components/SetTimer';
import Timer from './Components/Timer';
import Control from './Components/Control';

class App extends React.Component 
{
  constructor(props){
    super(props)
    this.state = 
    {
      breakValue: 5,
      sessionValue: 25,
      time:1500,
      active: false,
      mode: 'session'
    }
  }
  
  componentDidUpdate(prevProps) 
  {
      if(this.state.time === 0 && this.state.mode === 'session') 
      {
        this.setState({ time: this.state.breakValue * 60 , mode: 'break' })
        this.audio.play()
      }
      
      if(this.state.time === 0 && this.state.mode === 'break') 
      {
        this.setState({ time: this.state.sessionValue * 60 , mode: 'session' })
        this.audio.play()
      } 
  }
//---------------------------------------------------------------------------------------
   
  handleSetTimers = (inc, type) => {
  if (inc && this.state[type] === 60) return
  if (!inc && this.state[type] === 1) return
  this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
}


//---------------------------------------------------------------------------------------  
handlePlayPause = () => {
  if (this.state.active) {
    this.setState({ active: false }, () => clearInterval(this.pomodoro))
  } 
  else {
    if (!this.state.touched) {
      this.setState
      ({ 
        time: this.state.sessionValue * 60, 
        active: true, 
        touched: true }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1 }) ,1000)
      )} 
      else 
      {
        this.setState
        ({
          active: true,
          touched: true
        }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1 }) ,1000))
      }
  }
}
//--------------------------------------------------------------------------------------------  
handleReset = () => {
  this.setState({ 
    breakValue: 5, 
    sessionValue: 25, 
    time: 25 * 60, 
    active: false, 
    mode: 'session',
    touched: false
  })
  this.audio.pause()
  this.audio.currentTime = 0
  clearInterval(this.pomodoro)
}
//--------------------------------------------------------------------------------------------
  calculateTime = (time) => 
  {
    return `${Math.floor(time / 60)}:${time % 60 > 9 ? "" + time % 60 : "0" + time % 60}`;
  }
//-----------------------------------------------------------------------------------------------  
  

render(){
  return(
  <div>
    <Header/>
    <div className='settings'>
      <SetTimer 
        type='break' 
        label='Break Length' 
        value={this.state.breakValue}
        handleClick={this.handleSetTimers}
      />
      <SetTimer 
        type='session' 
        label='Session Length' 
        value={this.state.sessionValue}
        handleClick={this.handleSetTimers}  
      />
    </div>
    <Timer mode={this.state.mode} time={this.calculateTime(this.state.time)} />
    <Control active={this.state.active} handleReset={this.handleReset} handlePlayPause={this.handlePlayPause}/>
    <audio 
      id='beep'
      src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3' 
      ref={ref => this.audio = ref}>
    </audio>
  </div>
  );
}
}


//--------------------------------------------------------------------------------------

export default App;