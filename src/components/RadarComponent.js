import React from 'react'
import { Radar } from 'react-chartjs-2';
import { useStateValue } from "../StateProvider";
import useID from "../useID";



function RadarComponent() {
  const [{ term, id }, dispatch] = useStateValue();
  const { dataID } = useID(10);

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
        data: [dataID?.powerstats.combat, dataID?.powerstats.durability, dataID?.powerstats.intelligence, dataID?.powerstats.power, dataID?.powerstats.speed, dataID?.powerstats.strength]
      }
    ]
  }


    return (
        <div>
            <Radar data={radarData} />
        </div>
    )
}

export default RadarComponent
