import React from 'react';
import './SetTimer.css'

// const SetTimer = ({type,label,value,handleClick}) =>
// {
//     return(
//         <div className='SetTimer'>
//         {/* <div id ={`${type}-label`}> {type === 'session' ? 'Session': 'Break' } Length</div> */}
//         <div id={`${type}-label`}>{label}</div>
            
//             <div className='SetTimer-controls' id={`${type}-lenth`}>
//             <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)} > &darr; </button>
            
            
//             <h5 id ={`${type}-length`}>{value}</h5>


//             <button id={ `${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}  >&uarr;</button>
//             </div>
        
//         </div>
//     )
// } 

const SetTimer = ({ type, label, value, handleClick }) => 
(
    <div className='SetTimer'>
      <div id={`${type}-label`}>{label}</div>
        <div className='SetTimer-controls'>
        <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
        <h1 id={`${type}-length`}>{value}</h1>
        <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
      </div>
    </div>
  )

export default SetTimer;