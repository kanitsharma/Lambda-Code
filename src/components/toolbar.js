import React from 'react';
import Logo from './lambda.png'

const Toolbar=props => {
  return(
    <div className="nav">
      <span><img src={Logo} width="30" height="30" alt="Kanit sharma is awesome"></img></span>
      <p> Lambda Code </p>
    </div>
  )
}

export default Toolbar;
