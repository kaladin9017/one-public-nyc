import React from 'react';

import logo from '../images/onepublicnyc-logo.png';

const imgstyle = {
  width: "100%",
}


export default () => {

  return(
      <img className="App-header" src={logo} style={imgstyle} alt="logo" />
  )
}
