import React from "react";
import "./ResultID.css";
import { useStateValue } from "./StateProvider";
import useID from "./useID";
import { Container, Grid } from "@material-ui/core";

// ICONS
import FaceIcon from "@material-ui/icons/Face";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import WcIcon from '@material-ui/icons/Wc';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PublicIcon from '@material-ui/icons/Public';
// ----------------------------------------

function ResultID() {
  // console.log('REDUCER', reducer.action.id)
  const [{ term, id }, dispatch] = useStateValue();
  // console.log('TERM', term)
  // console.log('ID FINAL PLZZZZZZZZZ', id)

  // const { dataID } = useID(id);
  const { dataID } = useID(105);

  return (
    <div className="resultID">
      <div className="resultID__header">
        <div className="resultID__headerBackground">
          <h3>{dataID?.biography.alignment}</h3>
          <h3>#{dataID?.id}</h3>
        </div>
        <div className="resultID__headerProfile">
          <img src={dataID?.image.url} alt="" />
        </div>
        <div className="resultID__headerName">
          <h1>{dataID?.name}</h1>
          <h3>({dataID?.biography["full-name"]})</h3>
        </div>
      </div>

      {/* {Object.keys(dataID?.appearance).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {dataID?.appearance[keyName]}</span>
    </li>
))} */}

      <div className="resultID__appearance">
        <h2>Appearance</h2>
        <div className="resultID__appearanceInfo">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
              <div>
                <PublicIcon />
                <h3> {dataID?.appearance.race}</h3>{" "}
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
            <div>
            <AccessibilityIcon />
              <h3>{dataID?.appearance.height[1]}</h3>
            </div>
            </Grid>
            <Grid item xs={6} sm={4}>
            <div>
            <FitnessCenterIcon />
              <h3>{dataID?.appearance.weight[1]}</h3>
            </div>
            </Grid>
            <Grid item xs={6} sm={4}>
            <div>
            <WcIcon />
              <h3>{dataID?.appearance.gender}</h3>
            </div>
            </Grid>
            <Grid item xs={6} sm={4}>
            <div>
            <VisibilityIcon />
              <h3>{dataID?.appearance["eye-color"]}</h3>
            </div>
            </Grid>
            <Grid item xs={6} sm={4}>
            <div>
            <FaceIcon />
              <h3>{dataID?.appearance["hair-color"]}</h3>
            </div>
            </Grid>
          </Grid>
        </div>
        <div className="resultID__powerStats">
          <h2>Powerstats</h2>
          <h3>{dataID?.powerstats.combat}</h3>
          <h3>{dataID?.powerstats.durability}</h3>
          <h3>{dataID?.powerstats.intelligence}</h3>
          <h3>{dataID?.powerstats.power}</h3>
          <h3>{dataID?.powerstats.speed}</h3>
          <h3>{dataID?.powerstats.strength}</h3>
        </div>
      </div>

      {/* <h2>Appearance</h2>
      <h3>{dataID?.appearance["eye-color"]}</h3>
      <h3>{dataID?.appearance.gender}</h3>
      <h3>{dataID?.appearance["hair-color"]}</h3>
      <h3>{dataID?.appearance.race}</h3>
      <h3>{dataID?.appearance.height[1]}</h3>
      <h3>{dataID?.appearance.weight[1]}</h3> */}
      {/* 
      <h2>Biography</h2>
      <h3>{dataID?.biography["alter-egos"]}</h3>
      <h3>{dataID?.biography["first-appearance"]}</h3>
      <h3>{dataID?.biography["place-of-birth"]}</h3>
      <h3>{dataID?.biography.publisher}</h3>

      <h2>Connection</h2>
      <h3>{dataID?.connections["group-affiliation"]}</h3>
      <h3>{dataID?.connections.relatives}</h3>

      <h2>Work</h2>
      <h3>{dataID?.work.base}</h3>
      <h3>{dataID?.work.occupation}</h3> */}
    </div>
  );
}

export default ResultID;
