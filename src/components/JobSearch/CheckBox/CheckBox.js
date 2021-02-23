import React from "react";
import { Checkbox, Row, Col } from "antd";
import "./CheckBox.css";

const CheckBox = ({ name, number }) => {
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <Checkbox>{name}</Checkbox>
        </Col>
        <Col>{number}</Col>
      </Row>
    </div>
  );
};

export default CheckBox;
