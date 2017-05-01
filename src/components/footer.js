import React from 'react';
import Heart from './heart.png'

const Footer = props => {
  const handle = (e) => {
    e.preventDefault()
    let id = document.getElementById('gg')
    props.realtime(id.value)
  }
  return(
    <div className="fcontainer">
      <div className="row">
        <button onClick={props.execute} >Execute</button>
        <button onClick={props.share} >Share</button>
        <form action="#" onSubmit={handle}>
        <input type="text" id="gg" placeholder="Enter Key" />
        </form>
        <button onClick={props.reset} >Stop RealTime</button>
      </div>
      <div className="footer">
        <img src={Heart} height="50" width="50" alt="Functional Programmer"/>
        <p className="f1"> Made By Kanit Sharma </p>
        <img src={Heart} height="50" width="50" alt="Functional Programmer"/>
      </div>
    </div>
  )
}

export default Footer;
