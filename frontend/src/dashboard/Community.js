import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Task from "./Task";
import Profile from "./Profile";
import Plant from "./Plant";
import NewPlant from "./NewPlant";
import { Modal, Box } from "@mui/material";
import Recommendation from "./RecoModal";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/aloe.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MyMapComponent from "./MyMapComponent";
import michael from "../assets/michael.svg";
import diane from "../assets/diane.svg";
import marian from "../assets/marian.svg";
import lucas from "../assets/lucas.svg";
import emily from "../assets/emily.svg";
// import bg from "../assets/emily.svg";

const Community = () => {
  const location = useLocation();
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="community-container">
      <div className="sidebar" style={{ zIndex: 20}}>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
        <Link to={{ pathname: "/dashboard", state: { notSkipped: false } }}>
          <p style={{ color: "#0a3c57", fontSize: "30px" }}>
            <FontAwesomeIcon icon={faHome} />
          </p>
        </Link>
        <Link to="/community">
          <p style={{ color: "#0a3c57", fontSize: "30px" }}>
            <FontAwesomeIcon icon={faUsers} />
          </p>
        </Link>
      </div>

      <div className="main-content">
        <div className="header">
          <h2>Community</h2>
          <h3>{formattedDate}</h3>
        </div>
        <h2 className="greeting">
          Kitsilano <br /> Garden <br />
          Community
        </h2>
        <div className="content-box">
          <img alt="logo" className="aloe" src={bg} />
        </div>

        <div className="taskSection" style={{ marginTop: "-180px" }}>
          <h3>Community Map</h3>
          <MyMapComponent />
          <h3 style={{ marginTop: "30px" }} className="tasks">
            Community Posts
          </h3>
          <img
            alt="michael"
            className="post"
            src={michael}
            style={{ marginBottom: "20px" }}
          />
          <img
            alt="diane"
            className="diane"
            src={diane}
            style={{ marginBottom: "20px" }}
          />
          <img
            alt="marian"
            className="marian"
            src={marian}
            style={{ marginBottom: "20px" }}
          />
          <h3 className="tasks">Community Media</h3>
          <img
            alt="emily"
            className="image"
            src={emily}
            style={{ paddingRight: "20px" }}
          />
          <img alt="lucas" className="image" src={lucas} />
        </div>
      </div>
    </div>
  );
};

export default Community;
