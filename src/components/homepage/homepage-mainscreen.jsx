import React from "react";
import App_test from "../application/application-show.jsx";
import Windowcreate from "../application/windowCreation.jsx";
import '../../css/main.css';
import '../../css/window.css';



function Mainpage() {


    return (
        <>
        <div className="homescreen">
            <App_test></App_test>
            <App_test></App_test>
            <App_test></App_test>
            <Windowcreate></Windowcreate>
        </div>
        
        </>
        

    )
}

export default Mainpage