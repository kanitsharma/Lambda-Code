import React from 'react';

const Popup = props => {
  return(
    <div className="popup">
      <div className="footer"><p> Connect to your friend by sharing this Special key </p></div>
      <div><p>{props.uid}</p></div>
      <div><button className="but" onClick={props.closepop}>Ok</button></div>
    </div>
  )
}

export default Popup
