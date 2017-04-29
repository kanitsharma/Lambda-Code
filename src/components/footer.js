import React from 'react';
import Heart from './heart.png'

const Footer = props => {
  return(
    <div className="fcontainer">
      <button onClick={props.execute} >Execute</button>
      <div className="footer">
        <img src={Heart} height="50" width="50" alt="Functional Programmer"/>
        <p className="f1"> Made By Kanit Sharma </p>
        <img src={Heart} height="50" width="50" alt="Functional Programmer"/>
      </div>
    </div>
  )
}

export default Footer;
