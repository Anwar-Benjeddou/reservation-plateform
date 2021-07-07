/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components" style={{"backgroundColor":"#25272a"}}>
          <Container style={{"margin-top": "-50px"}}>
            <div className="title" style={{"text-align": "center"}}>
              <h3 style={{"color":"#ffffff","font-family":"Raleway, Arial, Helvetica, sans-serif"}}>PLUS DE SERVICES DE LA COLLECTION HBG</h3>
            </div>
            <Row>
              <Col md="4" sm="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  style={{"height":"auto","borderRadius":"0px"}}
                  src={require("assets/img/portfolio-featured-landscape-compressor-1.jpg").default}
                />
                <div className="img-details" style={{"text-align": "center"}}>
                  
                  <p style={{"color":"#ffffff"}}>LANDSCAPE</p>
                </div>
              </Col>
              <Col md="4" sm="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  style={{"height":"auto","borderRadius":"0px"}}
                  src={require("assets/img/portfolio-featured-lifestyle-compressor-1.jpg").default}
                />
                <div className="img-details" style={{"text-align": "center"}}>
                  
                  <p style={{"color":"#ffffff"}}>LIFESTYLE</p>
                </div>
              </Col>
              <Col md="4" sm="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  style={{"height":"auto","borderRadius":"0px"}}
                  src={require("assets/img/portfolio-featured-fashion-compressor.jpg").default}
                />
                <div className="img-details" style={{"text-align": "center"}}>
                  
                  <p style={{"color":"#ffffff"}}>FASHION</p>
                </div>
              </Col>
              <Col md="4" sm="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  style={{"height":"auto","borderRadius":"0px"}}
                  src={require("assets/img/portfolio-featured-business-compressor.jpg").default}
                />
                <div className="img-details" style={{"text-align": "center"}}>
                  
                  <p style={{"color":"#ffffff"}}>BUSINESS</p>
                </div>
              </Col>
              <Col md="4" sm="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  style={{"height":"auto","borderRadius":"0px"}}
                  src={require("assets/img/portfolio-featured-architecture-compressor-1.jpg").default}
                />
                <div className="img-details" style={{"text-align": "center"}}>
                  
                  <p style={{"color":"#ffffff"}}>BUILDINGS</p>
                </div>
              </Col>
            </Row>
          </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
