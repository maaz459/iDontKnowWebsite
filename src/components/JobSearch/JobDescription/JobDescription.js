import React from "react";
import { Card, Row, Col } from "antd";

const JobDescription = ({
  desgination,
  description,
  date,
  duration,
  salary,
}) => {
  return (
    <>
      <Card hoverable>
        <Row>
          <Col>{desgination}</Col>
        </Row>
        <Row>
          <Col> {description}</Col>
        </Row>
        <Row>
          <Col>{date}</Col>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Col>{duration}</Col>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Col>{salary}</Col>
        </Row>
      </Card>
    </>
  );
};

export default JobDescription;
