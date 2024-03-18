import React from 'react'
import '../../css/app-design.css'
import icontest from '../../img/computer.png'

function DesktopApp({icon, AppName, windowOpen}) {
    return (
        <>
            <div className='App-Container'>
                <div className='App-Container__inner' onClick={windowOpen}>
                    <img src={icon} alt="icon" className='imagetest'/>
                </div>
                <p className='App-name'>{AppName}</p>
            </div>
        </>
    )
}

export default DesktopApp
