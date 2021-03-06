import React from 'react';
import tag from './heart.png'

const Footer = props => {
  const handle = (e) => {
    e.preventDefault()
    let id = document.getElementById('gg')
    props.realtime(id.value)
  }
  return(
    <div className="fcontainer">
      <div>
        <p className="f1"> Connect To Friend </p>
      </div>
      <div className="row">
        <button onClick={() => props.execute()} >Execute</button>
        <button onClick={props.share} >Share</button>
        {props.show?
          (<form action="#" onSubmit={handle}>
            <input type="text" id="gg" placeholder="Enter Key" />
            </form>
          ):
          (<button onClick={props.reset} >Stop RealTime</button>)
        }
      </div>
      <div className="footer">
        <img src={tag} height="100" width="100" alt="Functional Programmer"/>
        <p className="f1"> Made By Kanit Sharma </p>
        <img src={tag} height="100" width="100" alt="Functional Programmer"/>
      </div>
    </div>
  )
}

export default Footer;
