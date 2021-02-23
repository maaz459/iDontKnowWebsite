import React from "react";
import { Row, Col, InputNumber, Input, Button } from "antd";
import "./JobSearchBanner.css";

const JobSearchBanner = () => {
  return (
    <div id="search-img">
      {/* <Row justify="center">
        <Col xs={24} sm={24} lg={12}>
         </Col>
      </Row> */}
      <h1 className="py-5 text-center" style={{ color: "white" }}>
        Find a Job You L<span style={{ color: "red" }}>o</span>ve
      </h1>

      <Row justify="center" className="pb-5">
        <Col xs={24} sm={24} lg={12}>
          <Row justify="ceneter">
            <Col>
              <Input
                placeholder="Job Title, Skill OR Company"
                size="large"
                id="jobSearch"
              />
            </Col>
            <Col>
              &nbsp;&nbsp;
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                size="large"
                id="job"
              />
              &nbsp;&nbsp;
            </Col>
            <Col>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                size="large"
                id="job"
              />
              &nbsp;&nbsp;
            </Col>
            <Col>
              <Button id="jobBtn">Search</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default JobSearchBanner;
