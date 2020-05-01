import React from 'react';
import { Link } from 'react-router-dom';
import './Tankit.css';

import Tankkaus from '../Tankkaus/Tankkaus';
import Content from '../Content/Content';

import AddIcon from '@material-ui/icons/Add';
import { FloatingButton } from '../buttons';



function Tankit(props) {

  let rows = props.data.map( invoice => {
    return (
      <Tankkaus data={invoice} key={invoice.id} />
    );
  }
  );

  return (
    <Content>
      <div style={{paddingBottom: '4rem'}}>
        {rows}
      </div>
      <Link to="/add"><FloatingButton primary><AddIcon fontSize="large" /></FloatingButton></Link>
    </Content>
  );
}

export default Tankit;