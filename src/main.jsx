import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainpage from './components/homepage/homepage-mainscreen.jsx'
import Navigation from './components/homemenu/homemenu-navigationbar.jsx'
import Background_img from './components/homepage/homepage-background.jsx'

ReactDOM.createRoot(document.getElementById('root-homescreen')).render(
        <>
                <Background_img></Background_img>
                <Mainpage></Mainpage>
                <Navigation></Navigation>
        </>
)

