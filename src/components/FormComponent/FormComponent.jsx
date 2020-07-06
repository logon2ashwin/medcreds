import React from 'react';
import { Form, Col } from "react-bootstrap";
import FormIcon from "../../assets/FormIcon";
import "./FormComponent.scss";

function FormComponent() {
  return (
    <div className="org-form">
      <div className="svg-section">
        <FormIcon />
      </div>
      <div className="form-section">
        <Form>
          <Form.Row>
            <Col md={6} sm={12} xs={12}>
              <Form.Group md={4} controlId="university">
                <Form.Label>Organization Name *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="University of California"
                  defaultValue=""
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Form.Group md={4} controlId="country">
                <Form.Label>Country *</Form.Label>
                <Form.Control as="select" size="md" custom>
                  <option>USA</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Russia</option>
                  <option>Canada</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={12} sm={12} xs={12}>
              <Form.Group md={4} controlId="email">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="skinner@support.com"
                  defaultValue=""
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={6} sm={12} xs={12}>
              <Form.Group md={4} controlId="certificateCategory">
              <Form.Label>Certificate Catergory *</Form.Label>
                <Form.Control as="select" size="md" custom>
                  <option>Demographics</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Form.Group md={4} controlId="certificate">
                <Form.Label>Certificate *</Form.Label>
                  <Form.Control as="select" size="md" custom>
                    <option>SSN</option>
                  </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
        <button className="form-submit">Add</button>
      </div>
    </div>
  )
}

export default FormComponent;
