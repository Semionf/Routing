import React from "react";
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MovieIcon from "@mui/icons-material/Movie";
import CasinoIcon from "@mui/icons-material/Casino";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Link } from "react-router-dom";
import "./style.css";
export const Sidebar = (props) => {
  return (
    <div className="background">
      <ul className="container">
        <li>
          <Link to="/">
            <HouseIcon className="icon" />{" "}
            <h4 className="section-name">Home</h4>
          </Link>
        </li>
        <li>
          <Link to="/Info">
            <InfoIcon className="icon" />{" "}
            <h4 className="section-name">About</h4>
          </Link>
        </li>
        <li>
          <Link to="/ContactUs">
            <LocalPhoneIcon className="icon" />{" "}
            <h4 className="section-name">Contact Us</h4>
          </Link>
        </li>
        <li>
          <Link to="/Movies">
            <MovieIcon className="icon" />
            <h4 className="section-name">Movies</h4>
          </Link>
        </li>
        <li>
          <Link to="/Games">
            <CasinoIcon className="icon" />
            <h4 className="section-name">Games</h4>
          </Link>
        </li>
        <li className="last">
          <SelfImprovementIcon className="icon" />
          <h4 className="section-name">Semion</h4>
        </li>
      </ul>
    </div>
  );
};
