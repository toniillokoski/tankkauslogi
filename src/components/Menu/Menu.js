import React from 'react';
import './Menu.css'

import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SettingsIcon from '@material-ui/icons/Settings';

function Menu(props) {
    return (
      <div className="menu">
        <div className="menu__nappi"><LocalGasStationIcon /></div>
        <div className="menu__nappi"><DriveEtaIcon /></div>
        <div className="menu__nappi"><SettingsIcon /></div>
      </div>
    )
  }

  export default Menu;