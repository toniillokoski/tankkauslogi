import React from 'react';

import Content from '../Content/Content';
import './EditTankki.css';
import TankkiLomake from '../TankkiLomake/TankkiLomake';

function EditTankki(props) {

    const index = props.data.findIndex(item => item.id === props.match.params.id);

    let itemData = props.data[index];

    return (
      <Content>

      <div className="edittankki">

      <h2>Tankkauksen muokkaaminen</h2>



      <TankkiLomake onFormSubmit={props.onFormSubmit} data={itemData} onDeleteTankki={props.onDeleteTankki} />
     
      </div>

    </Content>
  );
}

export default EditTankki;