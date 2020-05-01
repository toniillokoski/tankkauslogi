import React from 'react';

import Content from '../Content/Content';
import Button from '../buttons/index';
import './Settings.css';

function Settings(props) {
  return (
    <Content>
      <div className="settings">
        <h2>Profiili</h2>
        <div className="settings__profile">
          <div className="settings__userdata">
            <div><img src={props.user.photoURL} alt="" /></div>
            <div>{props.user.displayName}<br />{props.user.email}</div>
          </div>
          <div>
            <Button third onClick={props.onLogout}>LOGOUT</Button>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Settings;