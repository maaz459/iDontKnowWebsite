import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MainScreen from '../Screens/MainScreen/MainScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import SigninScreen from '../Screens/SigninScreen/SigninScreen';
import ChooseTemplateScreen from '../Screens/ChooseTemplateScreen/ChooseTemplateScreen';
import GeneratePDFScreen from '../Screens/GeneratePDFScreen/GeneratePDFScreen';
import HomePage from './../Screens/HomePage/HomePage';
import ContactScreen from './../Screens/ContactScreen/ContactScreen';
import PricingScreen from './../Screens/PricingScreen/PricingScreen';
import CreateCVPage from './../Screens/CreateCVPage/CreateCVPage';
import ViewCV from './../Screens/View CV/ViewCV'
import BasicInfo from './../Screens/CVMaking/BasicInfo/BasicInfo'
import Work from './../Screens/CVMaking/Work/Work';
import Education from './../Screens/CVMaking/Education/Education';
import Skills from './../Screens/CVMaking/Skills/Skills'
import JobSearchScreen from './../Screens/JobSearchScreen/JobSearchScreen';
import PayPalScreen from '../Screens/PayPalScreen/PaypalScreen';
export default class Routers extends Component {
    render() {
        return (
            <Router>
                {/* <Route path='/' exact component={ChooseTemplateScreen} /> */}
                <Route path='/' exact component={HomePage} />
                <Route path='/pricing' exact component={PricingScreen} />
                <Route path='/contact' exact component={ContactScreen} />
                <Route path='/createCV' exact component={CreateCVPage} />
                <Route path='/viewCV' exact component={ViewCV} />
                <Route path='/basicInfo' exact component={BasicInfo} />
                <Route path='/work' exact component={Work} />
                <Route path='/education' exact component={Education} />
                <Route path='/skills' exact component={Skills} />
                <Route path='/jobSearch' exact component={JobSearchScreen} />
                <Route path='/payment' exact component={PayPalScreen} />

                <Route path='/create' exact component={MainScreen} />
                <Route path='/signin' exact component={SigninScreen} />
                <Route path='/register' exact component={RegisterScreen} />
                <Route path='/generate' exact component={GeneratePDFScreen} />
            </Router>
        )
    }
};