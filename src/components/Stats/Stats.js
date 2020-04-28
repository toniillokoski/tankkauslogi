import React from 'react';
import Content from '../Content/Content';
import './Stats.css';

import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

function Stats(props) {

  const reducer = (groupedData, currentItem) => {
    const index = groupedData.findIndex(item => item.asema === currentItem.asema);
    if (index >= 0) {
      groupedData[index].euro = groupedData[index].euro + currentItem.euro;
    }
    else {
      groupedData.push({asema: currentItem.asema, euro: currentItem.euro});
    }
    return groupedData;
  }

  let groupedData = props.data.reduce(reducer, []);

  let doughnutData = {
    labels: groupedData.map(item => item.asema),
    datasets: [
      {
        data: groupedData.map(item => item.euro),
        backgroundColor: [
          '#ff0000',
          '#51ff00',
          '#0004ff',
          '#ffe600',
          '#ff00ea',
          '#ffffff',
          '#000000'
        ]
      }
    ]
  }

  let linedata = props.data.map( item => ({x: item.pvm, y: item.euro}));

  let data = {
    datasets: [
      {
        label: "Tankattu bensa",
        data: linedata,
        fill: false,
        backgroundColor: 'white',
        borderColor: '#ff9900'
      }
    ]
  }

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            displayFormats: {
              day: 'D.M',
              month: 'M.Y'
            }
          }
        }
      ]
    }
  }

    return (
      <Content>
        <div className="stats">
        <h2>Tilastot</h2>
        <h3>Aikajanan kulut</h3>
        <div className="stats__graph">
        <Line data={data} options={options} />
        </div>
        <h3>Tankkaukset Asemittain</h3>
        <div className="stats__graph">
        <Doughnut data={doughnutData} />
        </div>
        </div>
      </Content>
    );
  }

export default Stats;