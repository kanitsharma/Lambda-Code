import React from 'react';
import Logo from './lambda.png'

const Toolbar=props => {
  const theme = () => {
    var select = document.getElementById( 'select' );
    props.changetheme(select.options[ select.selectedIndex ].value)
  }
  return(
    <div className="nav">
      <div className="pull-right">
        <span><img src={Logo} width="30" height="30" alt="Kanit sharma is awesome"></img></span>
        <p> Lambda Code </p>
      </div>

      <div className="centert"><h1>"Programming is usually taught by examples" -Niklaus Wirth</h1><span>|</span></div>

      <div>
        <select className="picker" onChange={theme} id="select">
          <option value="merbivore" >Merbivore</option>
          <option value="ambiance">Ambiance</option>
          <option value="chaos">Chaos</option>
          <option value="monokai">Monokai</option>
          <option value="cobalt">Cobalt</option>
          <option value="clouds">Clouds</option>
          <option value="chrome">Chrome</option>
          <option value="dawn">Dawn</option>
          <option value="dreamweaver">Dreamweaver</option>
          <option value="iplastic">Iplastic</option>
          <option value="terminal">Terminal</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="solarized_dark">Solarized Dark</option>
          <option value="solarized_light">Solarized Light</option>
          <option value="vibrant_ink">Vibrant Ink</option>
        </select>
      </div>

    </div>
  )
}

export default Toolbar;
