import React from 'react'
import '../../css/main.css'
import background from '../../img/img0.jpg'

function Background_img() {

    return(
        <>
        <img 
            className='background-image'
            src={background} 
            alt="homepage_background" 
        />
        </>
    );
}

export default Background_img
