import React from "react";
import { Row, Col } from "antd";
import JobApply from "../JobApply/JobApply";
import icon from "../../../Assets/icons/Icon feather-message-square.png";

const JobApplyCard = () => {
  return (
    <JobApply
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
      date={
        <Row>
          <Col style={{ color: "#e6e6e6" }}>
            <i class="fas fa-calendar-alt"> &nbsp;&nbsp;&nbsp; 01-04-2021</i>
          </Col>
        </Row>
      }
      duration={
        <Row>
          <Col style={{ color: "#e6e6e6" }}>
            <i class="fas fa-calendar-alt"> &nbsp;&nbsp;&nbsp; 4 Years</i>
          </Col>
        </Row>
      }
      salary={
        <Row>
          <Col style={{ color: "#e6e6e6" }}>
            <i class="fas fa-usd-square"> &nbsp;&nbsp;&nbsp; 40000 - 50000</i>
          </Col>
        </Row>
      }
      applyBtn={"Apply"}
      saveBtn={"Save Job"}
      description={
        <p style={{ textAlign: "justify", marginTop: "2%" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words,
          <br />
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.{" "}
        </p>
      }
    />
  );
};

export default JobApplyCard;
