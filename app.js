import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./src/components/HomeComponent/HomeComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/commons/app.scss";


ReactDOM.render(
  <HomeComponent />,
  document.getElementById("app")
);
