import React, { useState, useEffect } from "react";
import "./ResultID.css";
import { useStateValue } from "./StateProvider";
import useID from "./useID";
import { Container, Grid } from "@material-ui/core";
// import RadarComponent from './components/Radar'
// import { Radar } from "react-chartjs-2";
import RadarComponent from "./components/RadarComponent";
import ResultID from './ResultID'
import axios from 'axios'

// ICONS
import FaceIcon from "@material-ui/icons/Face";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import WcIcon from "@material-ui/icons/Wc";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PublicIcon from "@material-ui/icons/Public";
import API_TOKEN from "./keys";


function Random() {
    const [{ id }, dispatch] = useStateValue("");
    console.log("ID RANDOM", id)

  const { dataID } = useID(id);

  console.log(dataID)



const checkSide = (side) => {
    if (side === "good") {
      return "👼";
    } else if (side === "bad") {
      return "😈";
    } else {
      return "🤷🏻‍♂️";
    }
  };

  const checkUnivers = (univers) => {
    if (univers === "DC Comics") {
      // return "https://picstatio.com/large/xj5hox/dc-comics-logo.jpg"
      return (
        <div
          style={{
            backgroundImage:
              "url(https://images.alphacoders.com/763/763331.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="resultID__headerBackground"
        >
          <h3>{checkSide(dataID?.biography.alignment)}</h3>
          <h3>#{dataID?.id}</h3>
        </div>
      );
    } else if (univers === "Marvel Comics") {
      // return "https://wallpapercave.com/wp/wp2654364.jpg"
      return (
        <div
          style={{
            backgroundImage:
              "url(https://www.bcslogic.com/wp-content/uploads/2019/05/5.8.19.wild_.esther.feature2-1120x450.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="resultID__headerBackground"
        >
          <h3>{checkSide(dataID?.biography.alignment)}</h3>
          <h3>#{dataID?.id}</h3>
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundImage: "url(https://wallpapercave.com/wp/wp2654364.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="resultID__headerBackground"
        >
          <h3>{checkSide(dataID?.biography.alignment)}</h3>
          <h3>#{dataID?.id}</h3>
        </div>
      );
    }
  };


    return (
        <div className="resultID">
        <div className="resultID__header">
  
          {checkUnivers(dataID?.biography.publisher)}
         
          <div className="resultID__headerProfile">
            <img src={dataID?.image.url} alt="" />
          </div>
          <div className="resultID__headerName">
            <h1>{dataID?.name}</h1>
            <h3>({dataID?.biography["full-name"]})</h3>
          </div>
        </div>
  
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
            {/* <RadarComponent /> */}
  
          </div>
        </div>
      </div>
    );
  }

export default Random
