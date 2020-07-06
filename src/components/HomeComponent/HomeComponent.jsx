import React, { Fragment } from 'react';
import FormComponent from "../FormComponent/FormComponent";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./HomeComponent.scss";

function HomeComponent() {
  return (
    <Fragment>
      <Header />
      <div className="App-heading">
        <h3>Admin Credentialing Organizations</h3>
        <p>Onboard A New Credentialing Organization</p>
      </div>
      <div className="form">
        <FormComponent />
      </div>
      <Footer />
    </Fragment>
  )
}

export default HomeComponent;
