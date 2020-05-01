import React from 'react';

import TankkiLomake from '../TankkiLomake/TankkiLomake';
import Content from '../Content/Content';
import './AddTankki.css';

function AddTankki(props) {
  return (
    <Content>
      <div className="uusiTankki">
        <h2>Uusi tankkaus</h2>
        <TankkiLomake onFormSubmit={props.onFormSubmit} />
      </div>
    </Content>
  );
}

export default AddTankki;