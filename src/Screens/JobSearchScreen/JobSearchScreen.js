import React from "react";
import { Row, Col } from "antd";
import SideBar from "./../../components/JobSearch/SideBar/SideBar";
import JobDescriptionCard from "./../../components/JobSearch/JobDescriptionCard/JobDescriptionCard";
import JobApplyCard from "./../../components/JobSearch/JobApplyCard/JobApplyCard";
import JobSearchBanner from './../../components/JobSearch/JobSearchBanner/JobSearchBanner';

const JobSearchScreen = () => {
  return (
    <>
      <JobSearchBanner />
      {/* <Col lg={24} sm={24} xs={24}></Col> */}
      <Row>
        <Col lg={5} sm={24} xs={24}>
          <SideBar />
        </Col>
        <Col lg={11} sm={24} xs={24}>
          <JobDescriptionCard />
          <JobDescriptionCard />
          <JobDescriptionCard />
          <JobDescriptionCard />
        </Col>
        <Col lg={8} sm={24} xs={24}>
          <JobApplyCard />
        </Col>
      </Row>
    </>
  );
};

export default JobSearchScreen;
