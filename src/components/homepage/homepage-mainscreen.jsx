import React, { useEffect, useState } from "react";
import DesktopApp from "../application/application-show.jsx";
import Windowcreate from "../application/windowCreation.jsx";
import MyPortfolio from '../application/Apps/MyPortfolio.jsx';
import Previouswork from "../application/Apps/Past-Works.jsx";
import '../../css/main.css';
import '../../css/window.css';
import '../../css/WIP.css'
import DesktopInternet from '../../img/098.png'
import Folder from '../../img/011.png'
import AdminHome from '../../img/021.png'



function Mainpage() {
    
    const [Portfolio, setPortfolio] = useState(false)
    const [Apps, setApps] = useState(false)

    
    return (
        <>
        <div className="homescreen">
            <DesktopApp icon={DesktopInternet} AppName='Internet'></DesktopApp>
            <DesktopApp icon={Folder} AppName='Past Work' windowOpen={setApps}></DesktopApp>
            <DesktopApp icon={AdminHome} AppName='Portfolio' windowOpen={setPortfolio}></DesktopApp>
            {Portfolio && <Windowcreate closeWindow={setPortfolio}><MyPortfolio/></Windowcreate>}
            {Apps && <Windowcreate closeWindow={setApps}><Previouswork /></Windowcreate>}
        </div>
        
        </>
    )
}

export default Mainpage