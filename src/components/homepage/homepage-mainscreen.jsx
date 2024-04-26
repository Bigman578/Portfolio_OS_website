import React, { useEffect, useState } from "react";
import DesktopApp from "../application/application-show.jsx";
import Windowcreate from "../application/windowCreation.jsx";
import MyPortfolio from '../application/Apps/MyPortfolio.jsx';
import Previousproject from "../application/Apps/Past-Works.jsx";
import Ownwork from "../application/Apps/Own-Work.jsx"
import PopupNav from "../homemenu/homemenu-popupmenu.jsx";
import '../../css/main.css';
import '../../css/window.css';
import '../../css/WIP.css'
import DesktopInternet from '../../img/098.png'
import Folder from '../../img/011.png'
import AdminHome from '../../img/021.png'



function Mainpage() {

    
    
    const [Portfolio, setPortfolio] = useState(false)
    const [Apps, setApps] = useState(false)
    const [ownwork, setOwnwork] = useState(false)

    useEffect(() => {

    }, [])

    
    return (
        <>
        <div className="homescreen">
            <DesktopApp icon={Folder} AppName='Own work' windowOpen={setOwnwork}></DesktopApp>
            <DesktopApp icon={DesktopInternet} AppName='Past Projects' windowOpen={setApps}></DesktopApp>
            <DesktopApp icon={AdminHome} AppName='Portfolio' windowOpen={setPortfolio}></DesktopApp>
            {Portfolio && <Windowcreate closeWindow={setPortfolio}><MyPortfolio/></Windowcreate>}
            {Apps && <Windowcreate closeWindow={setApps}><Previousproject /></Windowcreate>}
            {ownwork && <Windowcreate closeWindow={setOwnwork}><Ownwork/></Windowcreate>}
        </div>
        
        </>
    )
}

export default Mainpage