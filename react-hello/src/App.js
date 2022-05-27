import React from "react";
import "bulma/css/bulma.min.css"
import Navbar from "./components/Navbar";
import { Router } from "react-router-dom";

export default class App extends React.Component {
    
    render() {
        return(
            <div>
                <Navbar/>
            </div>
        );
    }
}