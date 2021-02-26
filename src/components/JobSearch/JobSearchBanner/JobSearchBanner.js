import React from "react";
import { Row, Col, InputNumber, Input, Button } from "antd";
import "./JobSearchBanner.css";
import man from './backMan.png'
import heart from './heart.png'
import front from './Path50326@2x.png'
const JobSearchBanner = ({ isMobile, isTabletOrMobile }) => {
  return (

    <div >
      <img className="manImage" src={man} alt="ManImage" />
      <img className="frontImage" src={front} alt="blackScreen" />

      <div className="jobSearchHeadings">

        <h1 className={isMobile ? "text-center" : "py-5 text-center"} style={{ color: "#F9F9F9", fontFamily: "AvenirTextBlack", fontSize: isMobile ? "35px" : "" }}>

          Find a J<span style={{ top: isTabletOrMobile ? isMobile ? "-12%" : "9%" : "10%" }} className="heart"><img src={heart} alt="Heart" /></span>ob You L<span style={{ color: "red" }}>o</span>ve

      </h1>
        <div className="jobSearchFields" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: isMobile ? "70%" : "60%" }}>
            <Row justify="center">

              <Col xl={9} lg={8} xs={24} sm={24} md={6}>
                <Input
                  placeholder="Job Title, Skill OR Company"
                  size="large"
                  id="jobSearch"
                />
              </Col>

              <Col style={isMobile ? { marginTop: "10px" } : { marginLeft: "10px" }} xs={12} sm={12} xl={5} md={4} lg={4}>
                <select id="arrows">
                  <option value="Vancouver Island University">United States</option>
                  <option value="Western University">Pakistan</option>
                  <option value="Wilfrid Laurier University">United Kingdom</option>
                  <option value="York University">Lahore Lahore Aye</option>
                </select>
              </Col>

              <Col style={isMobile ? { marginTop: "10px" } : { marginLeft: "10px" }} xs={12} sm={12} xl={5} md={4} lg={4}>
                <select id="arrows">
                  <option value="Vancouver Island University">Min.Salary</option>
                  <option value="Western University">1000</option>
                  <option value="Wilfrid Laurier University">500</option>
                  <option value="York University">Free</option>
                </select>
              &nbsp;&nbsp;
            </Col>

              <Col style={isMobile ? {} : { marginLeft: "10px" }} xs={8} sm={16} xl={4} md={4} lg={4}>
                <Button id="jobBtn">Search</Button>
              </Col>
            </Row></div>
        </div>
      </div>
    </div>



  );
};

export default JobSearchBanner;
