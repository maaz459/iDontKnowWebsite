import React from 'react';
import './ViewCV.css'
import bg from './../ChooseTemplateScreen/images/seven.png'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
const ViewCV = () => {
    return (
        <>
            <Navbar />
            <div class="big-banner">



                <div class="container py-5">
                    <div class="row">


                        <div class="col col-6 "> <img className="viewCVImg" src={bg} alt=" CV Preview" /> </div>
                        <div class="col-6 py-5">
                            <h3 className="viewCVTemplateHeading">Air <br /> CV Template </h3>
                            <p class="viewCVTemplateParagraph">This curriculum vitae (CV) template features a large
                            image in the header that can be personalized to suit
                            your field. It is a great medium for an online CV,
                            becoming your first point of contact with an employer
		who looks your name up online</p>
                            <button class="viewCVbutton">Use Template</button>

                        </div>
                    </div>
                </div>


            </div>



            <br /><br /><br />
            <hr />
            <Footer />
        </>
    );
}

export default ViewCV;