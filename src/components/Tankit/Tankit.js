import React from 'react';

import Tankkaus from '../Tankkaus/Tankkaus';
import Content from '../Content/Content';

function Tankit(props) {
    return (
      <Content>
        <Tankkaus />
        <Tankkaus />
        <Tankkaus />
        <Tankkaus />
        <Tankkaus />
      </Content>
    );
  }

  export default Tankit;