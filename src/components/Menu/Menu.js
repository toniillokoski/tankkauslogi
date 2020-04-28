
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';


import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SettingsIcon from '@material-ui/icons/Settings';

function Menu(props) {
    return (
      <div className="menu">
        <NavLink to="/"><div className="menu__nappi"><LocalGasStationIcon htmlColor="#000000" /></div></NavLink>
        <NavLink to="/stats"><div className="menu__nappi"><DriveEtaIcon htmlColor="#000000" /></div></NavLink>
        <NavLink to="/settings"><div className="menu__nappi"><SettingsIcon htmlColor="#000000" /></div></NavLink>
      </div>
    )
  }

  export default Menu;