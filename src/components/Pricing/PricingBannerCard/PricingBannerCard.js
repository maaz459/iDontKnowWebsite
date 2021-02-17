import React from "react";
import BannerCard from "../BannerCard/BannerCard";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import CardTabs from './../PricingCardTabs/CardTabs';

const PricingBannerCard = (props) => {
  return (
    <>

      <Row justify="center">
        <Col className="mx-4 my-2" xs={14} sm={14} md={12} lg={7} xl={7}>
          <BannerCard
            one={
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "AvenirTextBlack"
                }}
              >
                Free Account
                </p>
            }
            two={
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "AvenirTextBlack",
                  textAlign: "center",
                }}
              >
                $0
                </p>
            }
            three={
              <p style={{ textAlign: "center", color: "grey", fontFamily: "AvenirTextBlack" }}>
                Always free, no hidden fees{" "}
              </p>
            }
            four={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: "#229954", marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: "black", fontFamily: "AvenirTextBlack" }}>
                  3 Professionally Designed Templates
                  </span>
              </i>
            }
            five={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: "#229954", marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: "black", fontFamily: "AvenirTextBlack" }}>
                  Create 1 Resume
                  </span>
              </i>
            }
            six={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: "#229954", marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: "black", fontFamily: "AvenirTextBlack" }}>
                  Download to PDF
                  </span>
              </i>
            }
            seven={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: "#229954", marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: "black", fontFamily: "AvenirTextBlack" }}>
                  Career CV Branding
                  </span>
              </i>
            }
            btnText="Sign up Free"
            firstBtn={props.firstBtn}

          />
        </Col>

        <Col className="mx-4 my-2" xs={14} sm={14} md={12} lg={7} xl={7}>
          <BannerCard
            start={
              <CardTabs></CardTabs>
            }
            cardColor={props.cardColor}
            one={
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "AvenirTextBlack",
                  color: props.fontColor

                }}
              >
                Pro Quartely
                </p>
            }
            two={
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "AvenirTextBlack",
                  color: props.fontColor

                }}
              >
                $12
                  <span style={{
                  color: "grey", fontSize: "12px", fontFamily: "AvenirTextBlack"
                }}>USD</span>
              </p>
            }
            three={
              <p style={{
                textAlign: "center", color: "grey", fontFamily: "AvenirTextBlack"
              }}>
                Per Month (Billed quartely)
                </p>
            }
            four={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: props.fontColor, marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: props.fontColor, fontFamily: "AvenirTextBlack" }}>
                  20+ Professionally Designed Templates
                  </span>
              </i>
            }
            five={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: props.fontColor, marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: props.fontColor, fontFamily: "AvenirTextBlack" }}>
                  Create Unlimited Resumes
                  </span>
              </i>
            }
            six={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: props.fontColor, marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: props.fontColor, fontFamily: "AvenirTextBlack" }}>
                  Unlimited PDF Download
                  </span>
              </i>
            }
            seven={
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: props.fontColor, marginLeft: "10%" }}
              >
                <span className="mx-2" style={{ color: props.fontColor, fontFamily: "AvenirTextBlack" }}>
                  Personal Professional Website
                  </span>
              </i>
            }
            btnText="Get Started With Pro"
            firstBtn={props.secondBtn}
          />
        </Col>
      </Row>

    </>
  );
};

export default PricingBannerCard;
