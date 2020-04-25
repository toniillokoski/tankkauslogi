import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Content from '../Content/Content';
import Button from '../buttons';

import './AddTankki.css';

function AddTankki(props) {

  const [selectedDate, setSelectedDate] = useState(null)

    return (

      <Content>

        <div className="uusiTankki">

        <h2>Uusi tankkaus</h2>

        <form>

          <div className="uusiTankkaus">

          <div className="uusiTankkaus__rivi">
          <div>
          <label for="asema">Tankkausasema</label>
          <select name="asema">
            <option value="abc">ABC</option>
            <option value="neste">Neste</option>
            <option value="st1">ST1</option>
            <option value="teboil">Teboil</option>
            <option value="shell">Shell</option>
            <option value="seo">SEO</option>
            <option value="muu">Muu</option>
          </select>
          </div>
          </div>

          <div className="uusiTankkaus__rivi">
          <div>
          <label for="litra">Litrat</label>
          <input type="number" name="litra" />
          </div>
          
          <div>
          <label for="euro">Eurot</label>
          <input type="number" name="euro" />
          </div>
          </div>

          <div className="uusiTankkaus__alimmat">
          <div className="uusiTankkaus__rivi">
          <div>
          <label for="kilometrit">Mittarilukema</label>
          <input type="tel" name="kilometrit" size="10" />
          </div>
          </div>

          <div className="uusiTankkaus__rivi">
          <div>

          <Datepicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
          <label for="pvm">Päivämäärä</label>
          <input type="date" name="pvm" />  
          </div>
          </div>
          </div>

          <div className="uusiTankkaus__rivi">
            <div>
            <Button>PERUUTA</Button>
            </div>
            <div>
            <Button>LISÄÄ</Button>
            </div>
          </div>

          </div>

        </form>

      </div>

      </Content>
    );
  }

export default AddTankki;