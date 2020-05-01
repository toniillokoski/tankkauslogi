import React from 'react'
import Button from '../buttons'
import './TankkiLomake.css';
import { withRouter } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

class TankkiLomake extends React.Component {

  constructor(props) {
    super(props);
    const data = props.data ? props.data : {
      asema: "ABC",
      litra: "",
      euro: "",
      kilometrit: "",
      pvm: ""
    }
    this.state = {
        data: data
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDeleteTankki = this.handleDeleteTankki.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = Object.assign({}, this.state.data);
    data.euro = parseFloat(data.euro);
    data.litra = parseFloat(data.litra);
    data.kilometrit = parseFloat(data.kilometrit);
    data.id = data.id ? data.id : uuidv4();
    this.props.onFormSubmit(data);
    this.props.history.push("/");
  }

  handleDeleteTankki(event) {
    event.preventDefault();
    this.props.onDeleteTankki(this.state.data.id);
    this.props.history.push("/");
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <div className="uusiTankkaus">
      <div className="uusiTankkaus__rivi">
        <div>
          <label htmlFor="asema">Tankkausasema</label>
          <select name="asema" value={this.state.data.asema} onChange={this.handleInputChange}>
            <option value="ABC">ABC</option>
            <option value="Neste">Neste</option>
            <option value="St1">ST1</option>
            <option value="Teboil">Teboil</option>
            <option value="Shell">Shell</option>
            <option value="Seo">SEO</option>
            <option value="Muu">Muu</option>
          </select>
        </div>
      </div>

      <div className="uusiTankkaus__rivi">
        <div>
          <label htmlFor="litra">Litrat</label>
          <input type="number" name="litra" step="0.01" value={this.state.data.litra} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label htmlFor="euro">Eurot</label>
          <input type="number" name="euro" step="0.01" value={this.state.data.euro} onChange={this.handleInputChange}/>
        </div>
      </div>

      <div className="uusiTankkaus__alimmat">
        <div className="uusiTankkaus__rivi">
          <div>
            <label htmlFor="kilometrit">Mittarilukema</label>
            <input type="tel" name="kilometrit" size="10" value={this.state.data.kilometrit} onChange={this.handleInputChange}/>
          </div>
        </div>

        <div className="uusiTankkaus__rivi">
          <div>
            <label htmlFor="pvm">Päivämäärä</label>
            <input 
            type="date" 
            name="pvm" 
            value={this.state.data.pvm}
            onChange={this.handleInputChange}/>
          </div>
        </div>
      </div>

      <div className="uusiTankkaus__napit">
        <div>
          <Button onClick={this.handleCancel}>PERUUTA</Button>
        </div>
        <div>
          <Button type="submit" secondary>{this.state.data.id ? "TALLENNA" : "LISÄÄ"}</Button>
        </div>
      </div>

      { this.props.onDeleteTankki ? 
        <div className="uusiTankkaus__napit2">
          <div>
            <Button onClick={this.handleDeleteTankki}>POISTA</Button>
          </div>
        </div>
      : "" }

    </div>
    </form>
    );
  }
}

export default withRouter(TankkiLomake);