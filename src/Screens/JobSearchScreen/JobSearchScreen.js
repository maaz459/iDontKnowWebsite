import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import { useMediaQuery } from 'react-responsive'

import JobSearchBanner from "../../components/JobSearch/JobSearchBanner/JobSearchBanner";
import SideBar from "../../components/JobSearch/SideBar/SideBar";
import JobDescriptionCard from "../../components/JobSearch/JobDescriptionCard/JobDescriptionCard";
import JobApplyCard from "../../components/JobSearch/JobApplyCard/JobApplyCard";

const JobSearchScreen = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const heightCheck = useMediaQuery({ maxWidth: 770 })
  const heightCheckSmall = useMediaQuery({ maxWidth: 360 })

  // const [open, setOpen] = useState(false);

  // const openCard = (e) => {
  //   setOpen(e);
  // };

  return (
    <>

      <div style={{ fill: "#F1F1F1" }}>
        <div style={heightCheck ? { height: heightCheckSmall ? "300px" : "450px" } : {}} >
          <JobSearchBanner isMobile={isMobile} isTabletOrMobile={isTabletOrMobile} />
        </div>

        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Layout.Sider
            width={250}
            style={{
              backgroundColor: "white",
              paddingLeft: "4%",
              paddingRight: "4%",
              paddingBottom: "4%",
            }}
          >
            <SideBar />
          </Layout.Sider>
          <Layout.Content style={{ margin: '0 16px' }}>
            <Row >

              <Col xl={12} lg={11} sm={24} xs={24} className="mx-auto">
                {/* <JobDescriptionCard openCard={openCard} />
          <JobDescriptionCard openCard={openCard} />
          <JobDescriptionCard openCard={openCard} />
          <JobDescriptionCard openCard={openCard} /> */}

                <JobDescriptionCard />
              </Col>

              {/* {open && (
          <Col lg={8} sm={24} xs={24} className="mx-auto">
            <JobApplyCard />
          </Col>
        )} */}
              <Col xl={8} lg={8} sm={24} xs={24} className="mx-auto">
                <JobApplyCard />
              </Col>
            </Row></Layout.Content>
        </Layout>
      </div>
    </>
  );
};

export default JobSearchScreen;