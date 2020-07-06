import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Appicon from "../../assets/Appicon";
import Profile from "../../assets/images/pp.jpeg";

import "./Header.scss";

function Header() {
  return (
    <div className="app-header">
      <Row className="header-row">
        <Col className="header-col app-icon" md={3} xs={1} sm={1}>
          <Appicon size="app-icon-svg" />
        </Col>
        <Col className="header-col" md={7} xs={9} sm={9}>
          <div className="links">
            <label className="header-label">Home</label>
          </div>
          <div className="links">
            <label className="header-label">Credentialing Organizations</label>
          </div>
          <div className="links">
            <label className="header-label">Hospitals</label>
          </div>
          <div className="links">
            <label className="header-label">Reports</label>
          </div>
        </Col>
        <Col className="header-col profile" md={2} xs={1} sm={1}>
          <img className="profile-pic" src={Profile} alt="Logo" width="45" height="45" />
          <label className="profile-name">Ericnel</label>
        </Col>
      </Row>
    </div>
  )
}

export default Header
