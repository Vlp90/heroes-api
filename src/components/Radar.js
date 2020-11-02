import React from 'react'
import { Radar } from 'react-chartjs-2';

const radarData = {
    labels: ['Combat', 'Durability', 'Intelligence', 'Power', 'Speed', 'Strength'],
    datasets: [
      {
        label: 'Powerstats',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 1)',
        pointBorderColor: 'rgba(255, 0, 0, 1)',
        pointBackgrounColor: 'rgba(255, 0, 0, 1)',
        pointRadius: 1,
        data: [10, 84, 78, 109, 85, 100]
      }
    ]
  }
function RadarComponent() {
    return (
        <div>
            <Radar data={radarData} />
        </div>
    )
}

export default RadarComponent
