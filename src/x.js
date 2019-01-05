// class App extends Component 
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = 
//     {
//       breakValue:5,
//       sessionValue:0.1,
//       mode:"session",
//       time:55*60*1000,
//       active:false,
//       touched:false
//     }
//   }

//   componentDidUpdate(prevProps) 
//   {
//     if(this.state.time === 0 && prevProps.mode ==='session') 
//     {
//       console.log("entering x")
//       this.setState
//       ({ 
//         time: this.state.breakValue * 60 * 1000 - (30*60*1000), mode: 'break' 
//        })
//     }

//     if(this.state.time === 0 && prevProps.mode === 'break') 
//     {
//       this.setState
//       ({ 
//         time: this.state.sessionValue * 60 * 1000 - (30*60*1000), mode: 'session' 
//       })
//     } 
//   }
// //X-------------------------handling onClick events of SetTimer Component----------------------X
  
//   handleSetTimers = (inc,type) =>
//   {
//     if (inc && this.state[type] === 60) 
//     {
//       console.log('entering');
//       return
//     }
//     if(!inc && this.state[type] === 1)
//     { 
//       console.log('entering');
//       return
//     }
    
//     this.setState
//     ({  
//       [type]:this.state[type] + (inc ? 1:-1)
//     })
//   }
// //================================================================================================
//   handleReset =() =>
//   {
//     this.setState({
//         breakValue:5,
//         sessionValue:25,
//         time:55*60*1000,
//         active:false,
//         touched:false
//     })

//     clearInterval(this.pomodoro);
  
//   }
// //============================================================================================
// handlePlayPause = () =>
// {
//   if(this.state.active)
//   {
//     clearInterval(this.pomodoro)
//     this.setState({ active:false });
//   }
//   else
//   {
//     if(this.state.touched)
//     {
//       this.pomodoro = setInterval( () => this.setState({time:this.state.time-1000}),1000)
//       this.setState({active:true})
//     }
    
//     else
//     {
//       this.setState
//       ({
//         time:(this.state.sessionValue*60*1000)-(30*60*1000),
//         touched:true,
//         active:true
//       }, 
//       () => {this.pomodoro = setInterval(()=>this.setState({time:this.state.time-1000}),1000)});
//     }
//   }
// }
// //X----------------------------------------------------------------------------------------X

//   render() 
//   {
//     return (
//       <div>
//         <Header />
        
//         <div className="settings">
//         {/* 
//           <SetTimer type = 'break'   label='break-length' value={this.state.breakValue}   handleClick={this.handleSetTimers} />
//           <SetTimer type = 'session' label='session-length'  value={this.state.sessionValue} handleClick={this.handleSetTimers} /> 
//         */}

//         <SetTimer 
//           type='break' 
//           label='Break Length' 
//           value={this.state.breakValue}
//           handleClick={this.handleSetTimers}
//         />

//         <SetTimer 
//           type='session' 
//           label='Session Length' 
//           value={this.state.sessionValue}
//           handleClick={this.handleSetTimers}  
//         />
//         </div>
        
//         <Timer 
//         mode={this.state.mode} 
//         time={moment(this.state.time).format('mm:ss')}
//         />

//         <Control 
//         active={this.state.active} 
//         handleReset={this.handleReset} 
//         handlePlayPause={this.handlePlayPause}
//         />

//         <audio 
//         id='beep'
//         src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3' 
//         ref={ref => this.audio = ref}>
//         </audio> 
      
//       </div>
//     );
//   }
// }