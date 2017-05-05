import React from 'react';

const Popup = props => {
  return(
    <div className="overlay">
      <div className="popup">
        <div className="footer"><p> Connect to your friend by sharing this Special key </p></div>
        <div><p className="uid">{props.uid}</p></div>
        <div><button className="but" onClick={props.closepop}>Ok</button></div>
      </div>
    </div>
  )
}

export default Popup
