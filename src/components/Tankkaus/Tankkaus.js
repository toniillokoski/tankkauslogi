import React from 'react';
import moment from 'moment';
import './Tankkaus.css';

function Tankkaus(props) {

    let pvm = moment(props.data.pvm);

    let litrahinta = props.data.euro / props.data.litra

    return (
      <div className="tankkaus">
        <div className="tankkaus__rivi">
          <div className="tankkaus__asema">{props.data.asema}</div>
          <div className="tankkaus__litrahinta">{litrahinta.toFixed(3)} €/l</div>
        </div>
        <div className="tankkaus__rivi">
          <div className="tankkaus__pvm">{pvm.format("D.M.Y")}</div>
          <div className="tankkaus__litra">{props.data.litra} l</div>
        </div>
        <div className="tankkaus__rivi">
          <div className="tankkaus__km">{ props.data.kilometrit ? props.data.kilometrit + "km" : ""}</div>
          <div className="tankkaus__euro">{props.data.euro} €</div>
        </div>
      </div>
    );
  }

export default Tankkaus;