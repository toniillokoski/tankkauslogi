import React from 'react';

import Tankkaus from '../Tankkaus/Tankkaus';
import Content from '../Content/Content';

function Tankit(props) {

let rows = props.data.map( invoice => {
  return (
      <Tankkaus data={invoice} />
    );
  }
);

    return (
      <Content>
        {rows}
      </Content>
    );
  }

  export default Tankit;