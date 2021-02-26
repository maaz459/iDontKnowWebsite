import React, { useState } from "react";
import { Card, Row, Col } from "antd";

const JobDescription = ({
  desgination,
  description,
  date,
  duration,
  salary,
  //openCard,
}) => {
  // const [color, setColor] = useState("white");

  // const changeColor = () => {
  //   setColor("#e6e6e6");
  //   openCard(true);
  // };

  // console.log("ajj wekay ga groverr", openCard);

  return (
    <>
      {/* <Card hoverable style={{ backgroundColor: color }} onClick={changeColor}></Card> */}
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
