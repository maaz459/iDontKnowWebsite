import React, { useState } from 'react';
import { Row, Col, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import './../BasicInfo/BasicInfo.css'
import Navbar from './../../../components/Navbar/Navbar';
import seven from './../../ChooseTemplateScreen/images/ten.jpg'
import image from './../BasicInfo/image.png'
import { useMediaQuery } from 'react-responsive'
import Tab from './../../../components/Utils/CVMaking Components/ActivityBar/Tab';
import NameBadge from './../../../components/Utils/CVMaking Components/NameBadges/NameBadge';
import InputField from './../../../components/Utils/CVMaking Components/InputFields/InputField';
import CVMakingButton from './../../../components/Utils/CVMaking Components/Buttons/CVMakingButton';
import Footer from './../../../components/Footer/Footer';
import WorkFields from './WorkFields';
const Work = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ maxWidth: 600 })
    const [inputList, setInputList] = useState([{ jobTitle: "", employer: "", city: "", stateProvince: "", startDate: "", endDate: "", description: "" }]);

    const settingList = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    return (
        <>
            <Navbar border={true} />
            {/* Tabs */}
            {isMobile ? <></> : <div style={{ margin: "7% 0%", display: "flex", justifyContent: "center" }}>
                <Tab current={1}></Tab>
            </div>
            }

            {/* Heading and UploadButton */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="basicInfoDislay">
                    <Row >
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1 className="basicInfoPageHeading">Tell us about your job experience</h1>
                            <h6 className="fieldsMessage">Fields with <span style={{ color: "red" }}>*</span> are mandatory</h6>

                        </Col>
                        <Col className="uploadPhoto" lg={6} md={6} sm={24} xs={24}>
                            <div>
                                <img width={60} src={image}></img></div>
                            <p className="uploadPhotoText">Upload your Photo</p>
                        </Col>
                    </Row>
                </div>

            </div>

            {/* Input Fields */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="basicInfoDislay" >
                    <Row justify={isTabletOrMobile ? "center" : "start"}>
                        <Col lg={16} md={16} sm={24} xs={24}>
                            <NameBadge name="Most Recent Jobs"></NameBadge>
                            <WorkFields checkBox={true} />

                            <NameBadge name="Previous Jobs" additional="If Any"></NameBadge>
                            {/* <WorkFields onClick={() => settingList(i)} /> */}
                            {inputList.map((d, i) => {
                                return <WorkFields onClick={() => settingList(i)} />

                            })}
                            <Row>
                                <Col style={{ marginTop: "5%" }} Span={22}>
                                    <p onClick={() => setInputList([...inputList, { jobTitle: "", employer: "", city: "", stateProvince: "", startDate: "", endDate: "", description: "" }])} style={{ fontFamily: "AvenirTextBlack", color: "#FF4309", cursor: "pointer" }}>Add More <i style={{ color: "#0A2C66" }} class="fas fa-plus"></i></p>
                                </Col>
                            </Row>

                        </Col>
                        <Col span={2} />
                        <Col style={{ textAlign: "center" }} lg={6} md={6} sm={14} xs={14}>
                            <img className="basicInfoCVImage" style={{ maxWidth: "70%" }} src={seven} alt="CV is Loading"></img>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button style={{
                                    backgroundColor: "#F4F4F4",
                                    textAlign: "center",
                                    marginTop: "30px", color: "#0A2C66",
                                    border: "none"
                                }} shape="round" icon={<EyeOutlined style={{ all: "unset", color: "#FF4309" }} />} size={5}>
                                    Preview
        </Button>
                            </div>
                        </Col>
                    </Row>

                    {/* Back and Next Buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "7%", marginBottom: "125px" }}>
                        <div>
                            <CVMakingButton name="Back" />
                        </div>
                        <div>
                            <CVMakingButton name="Next" />

                        </div>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer bgColor="#FAFBFC" border={true} />
        </>
    );
}

export default Work;