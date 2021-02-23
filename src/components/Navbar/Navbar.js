import React from "react";
import "./Navbar.css";
import logo from "./../../Assets/images/logo.png";

export default function Navbar(props) {
    return (
        <>
            <nav style={{ backgroundColor: "#FFFFFF", borderBottom: props.border ? "1px solid #ECECEC" : "" }} class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img style={{ maxWidth: "60%" }} src={logo}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item longName">
                            <a class="nav-link " href="#">Create CV</a>
                        </li>
                        <li class="nav-item longName">
                            <a class="nav-link " href="#">Search Job</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item" >
                            <a id="loginButton" class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item signUp">
                            <form >
                                <button class="signUpButton" type="submit">Sign up</button>
                            </form>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}