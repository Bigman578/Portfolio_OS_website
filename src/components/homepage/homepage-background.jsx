import React from 'react'
import '../../css/main.css'


function Background_img() {
    const background = '../../img/img0.jpg';

    return(
        <>
        <img 
            src={background} 
            alt="homepage_background" 
        />
        </>
    );
}

export default Background_img