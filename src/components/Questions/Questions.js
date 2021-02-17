import React from "react";
import { Row, Col } from "antd";
import QuestionIcon from "./QuestionIcon/QuestionIcon";
import FAQ from "./../Utils/FAQ/FAQ";

const Questions = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <QuestionIcon />
        </Col>
        <Col xs={20} sm={20} md={10} lg={12} xl={12}>
          <FAQ />
        </Col>
      </Row>
    </div>
  );
};
export default Questions;
