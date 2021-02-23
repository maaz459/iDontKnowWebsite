import React, { useState } from 'react';
import { Row, Col, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import './BasicInfo.css'
import Navbar from './../../../components/Navbar/Navbar';
import seven from './../../ChooseTemplateScreen/images/ten.jpg'
import image from './image.png'
import { useMediaQuery } from 'react-responsive'
import Tab from './../../../components/Utils/CVMaking Components/ActivityBar/Tab';
import NameBadge from './../../../components/Utils/CVMaking Components/NameBadges/NameBadge';
import InputField from './../../../components/Utils/CVMaking Components/InputFields/InputField';
import TextArea from './../../../components/Utils/CVMaking Components/TextArea/TextArea';
import CVMakingButton from './../../../components/Utils/CVMaking Components/Buttons/CVMakingButton';
import Footer from './../../../components/Footer/Footer';
const BasicInfo = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ maxWidth: 600 })

    const [inputList, setInputList] = useState([{ socialSite: "", socialLink: "" }]);
    return (
        <>
            <Navbar border={true} />
            {/* Tabs */}
            {isMobile ? <></> : <div style={{ margin: "7% 0%", display: "flex", justifyContent: "center" }}>
                <Tab current={0}></Tab>
            </div>
            }

            {/* Heading and UploadButton */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="basicInfoDislay">
                    <Row >
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1 className="basicInfoPageHeading">What’s the best way for employers to contact you?</h1>
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
                            <NameBadge name="Basic Information"></NameBadge>
                            <Row justify="center" style={{ marginTop: "5%" }}>
                                <Col span={11}>
                                    <InputField
                                        placeholder="First Name"
                                        suffix={true}
                                        type="text"
                                    />
                                </Col>

                                <Col span={2}>
                                </Col>
                                <Col span={11}>
                                    <InputField
                                        placeholder="Last Name"
                                        suffix={true}
                                        type="text" />
                                </Col>

                                <Col style={{ marginTop: "7%", marginBottom: "5%" }} span={24}>
                                    <InputField placeholder="Profession" suffix={true}
                                        type="text" />
                                </Col>
                                <Col span={11}>
                                    <InputField placeholder="City" suffix={true}
                                        type="text" />
                                </Col>
                                <Col span={2}>
                                </Col>
                                <Col span={11}>
                                    <InputField placeholder="State/Province" suffix={true}
                                        type="text" />
                                </Col>

                                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                                    <InputField placeholder="Phone Number" suffix={true}
                                        type="text" />
                                </Col>
                                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={2}>
                                </Col>
                                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                                    <InputField placeholder="Email Address" suffix={true}
                                        type="text" />
                                </Col>
                            </Row>
                            <NameBadge name="Biography"></NameBadge>
                            <Row>
                                <Col style={{ marginTop: "5%", marginBottom: "7%" }} span={24}>
                                    <TextArea placeholder="Brief History" minRows={4} suffix textArea={true}></TextArea>
                                </Col>
                            </Row>
                            <NameBadge name="Add Social Links"></NameBadge>
                            {inputList.map((d, i) => {
                                return <Row justify="center" style={{ marginTop: "5%" }}>
                                    <Col span={11}>
                                        <InputField
                                            placeholder="Social Website"
                                            type="text"
                                        />
                                    </Col>
                                    <Col span={1}>
                                    </Col>
                                    <Col span={11}>
                                        <InputField
                                            placeholder="Social Links"
                                            type="text" />
                                    </Col>
                                    <Col onClick={() => {
                                        const list = [...inputList];
                                        list.splice(i, 1);
                                        setInputList(list);
                                    }} style={{ marginTop: "2%", cursor: "pointer" }} span={1}><i class="far fa-trash-alt"></i></Col>


                                </Row>
                            })}
                            <Row>
                                <Col style={{ marginTop: "5%" }} Span={22}>
                                    <p onClick={() => setInputList([...inputList, { socialSite: "", socialLink: "" }])} style={{ fontFamily: "AvenirTextBlack", color: "#FF4309", cursor: "pointer" }}>Add More <i style={{ color: "#0A2C66" }} class="fas fa-plus"></i></p>
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

export default BasicInfo;