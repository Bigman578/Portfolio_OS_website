import React, { useState } from 'react'
import appicon from '../../img/computer.png'
import '../../css/popup-nav-menu.css'


function PopupNav() {

    const [contactInfo, setcontactInfo] = useState(false)

    const toggleContact = () => {
        setcontactInfo(!contactInfo)
    }

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
                        <div className="profile">
                            <img src='' alt="profile-pic" />
                        </div>

                        <p>Bwar Mohammad</p>
                        <p>Past work and Projects</p>
                        <p>About</p>
                        <p onClick={toggleContact}>Contacts</p>

                        {contactInfo && 
                        <div className='contact-info'>
                            <p><a target='_blank' href="https://github.com/Bigman578">Github</a></p>
                            <p><a href="mailto:bwar62@gmail.com">Email</a></p>
                            <p><a href="telto:+46708847954">Phone</a></p>
                        </div>}

                        <hr />

                        <p>Built-in Apps</p>
                        <p>CV's</p>

                        <hr />

                        <p>Settings</p>
                        <p></p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupNav