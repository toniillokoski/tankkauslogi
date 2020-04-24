import React from 'react';
import './Tankkaus.css'

function Tankkaus(props) {
    return (
      <div className="tankkaus">
        <div className="tankkaus__rivi">
          <div className="tankkaus__asema">ABC</div>
          <div className="tankkaus__litrahinta">1,50€/l</div>
        </div>
        <div className="tankkaus__rivi">
          <div className="tankkaus__pvm">25.4.2020</div>
          <div className="tankkaus__litra">35,00 l</div>
        </div>
        <div className="tankkaus__rivi">
          <div className="tankkaus__km">150000km</div>
          <div className="tankkaus__euro">52,50 €</div>
        </div>
      </div>
    );
  }

export default Tankkaus;