import React from 'react'
import '../../css/app-design.css'
import icontest from '../../img/computer.png'

function App_test() {
    return (
        <>
            <div className='App-Container'>
                <div className='App-Container__inner'>
                    <img src={icontest} alt="icon" className='imagetest'/>
                </div>
                <p className='App-name'>App Name</p>
            </div>
        </>
    )
}

export default App_test
