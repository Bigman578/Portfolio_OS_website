import React from 'react'
import appicon from '../../img/computer.png'
import '../../css/popup-nav-menu.css'

function PopupNav() {
    return(
        <>
            <div className='main-nav'>
                <div className='main-nav__inner'>
                    <div className='apps-list'>
                        <div className='navapp-container'>
                            <div className="navapp-container__inner">
                                <img src={appicon} alt="appicon" />
                                <p>app-name</p>
                            </div>
                        </div>
                        <div className='navapp-container'>
                            <div className="navapp-container__inner">
                                <img src={appicon} alt="appicon" />
                                <p>app-name</p>
                            </div>
                        </div>
                        <div className='navapp-container'>
                            <div className="navapp-container__inner">
                                <img src={appicon} alt="appicon" />
                                <p>app-name</p>
                            </div>
                        </div>

                        <div className="all-programs">
                            <input type="text" placeholder='Search "programs" and information'/>
                        </div>

                    </div>
                    <div className='nav-list'>
                        <div className="profile"></div>
                        <p>app-name</p>
                        <p>app-name</p>
                        <p>app-name</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupNav