import React, { useState } from "react";
import DesktopApp from "../application/application-show.jsx";
import Windowcreate from "../application/windowCreation.jsx";
import '../../css/main.css';
import '../../css/window.css';
import DesktopInternet from '../../img/098.png'
import Folder from '../../img/011.png'
import AdminHome from '../../img/021.png'



function Mainpage() {
    
    const [Portfolio, setPortfolio] = useState(false)
    
    
    return (
        <>
        <div className="homescreen">
            <DesktopApp icon={DesktopInternet} AppName='Internet'></DesktopApp>
            <DesktopApp icon={Folder} AppName='Folder'></DesktopApp>
            <DesktopApp icon={AdminHome} AppName='Home'></DesktopApp>
            <Windowcreate></Windowcreate>
            <Windowcreate></Windowcreate>
        </div>
        
        </>

    )
}

export default Mainpage