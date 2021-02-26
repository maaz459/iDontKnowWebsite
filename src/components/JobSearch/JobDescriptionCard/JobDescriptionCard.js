import React from "react";
import { Row, Col } from "antd";
import icon from "../../../Assets/icons/Icon feather-message-square.png";
import JobDescription from "../JobDescription/JobDescription";

const JobDescriptionCard = (props) => {
  return (
    <JobDescription
      desgination={
        <Row>
          <Col className="pt-2">
            <img src={icon} />
          </Col>
          &nbsp;&nbsp;
          <Col>
            <p>
              <strong>Graphic Designer</strong>
              <br />
              <span style={{ color: "#e6e6e6" }}>Layyah, Sahiwal Pakistan</span>
            </p>
          </Col>
        </Row>
      }
      description={
        <p style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      }
      date={
        <Row>
          <Col>
            <i class="fas fa-calendar-alt"> &nbsp;&nbsp;&nbsp; 01-04-2021</i>
          </Col>
        </Row>
      }
      duration={
        <Row>
          <Col>
            <i class="fas fa-calendar-alt"> &nbsp;&nbsp;&nbsp; 4 Years</i>
          </Col>
        </Row>
      }
      salary={
        <Row>
          <Col>
            <i class="fas fa-usd-square"> &nbsp;&nbsp;&nbsp; 40000 - 50000</i>
          </Col>
        </Row>
      }
    />
  );
};
export default JobDescriptionCard;
