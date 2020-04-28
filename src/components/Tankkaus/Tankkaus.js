import React from 'react';
import moment from 'moment';
import './Tankkaus.css';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

function Tankkaus(props) {

    let pvm = moment(props.data.pvm);

    let litrahinta = props.data.euro / props.data.litra

    return (
      <div className="tankkaus">
          <div className="tankkaus__ryhma">
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
        <div className="tankkaus__linkki">
          <Link to={"/edit/" + props.data.id}><DoubleArrow htmlColor="#000000"/></Link>
        </div>
      </div>
    );
  }

export default Tankkaus;