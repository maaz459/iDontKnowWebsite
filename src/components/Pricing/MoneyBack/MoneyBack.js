import React from "react";
import { Col, Row } from "antd";
import iconImg from "./../../../Assets/images/Group 11058.png";

const MoneyBack = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d9f4eb",
          // width: "1100px",
          height: "200px",
          alignContent: "center",
          marginTop: "10%",
          margin: "0 auto",
        }}
      >
        <Row>
          <Col span={4}>
            <img src={iconImg} />
          </Col>
          <Col span={20}>
            <p
              style={{ fontSize: "25px", fontWeight: "bold", marginTop: "3%" }}
            >
              Money Back Gurantee
            </p>
            <p style={{ fontSize: "15px", color: "grey" }}>
              If you're not satisfied with Career CV for any reason with in your
              30 days, simply email us and we will refund your money.
              <br />
              No strings attached.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MoneyBack;
