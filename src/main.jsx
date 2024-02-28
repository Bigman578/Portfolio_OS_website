import React from 'react'
import ReactDOM from 'react-dom/client'
import Windowcreate from './components/windowProduction/windowCreation.jsx'
import Navigation from './components/homemenu/homemenu-navigationbar.jsx'
import Background_img from './components/homepage/homepage-background.jsx'

ReactDOM.createRoot(document.getElementById('root-homescreen')).render(
        <>
                <Background_img></Background_img>
                <Navigation></Navigation>
        </>
)

