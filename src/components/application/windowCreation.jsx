import '../../css/window.css'
import React from 'react'

function Windowcreate({ children }) {


    return (
        <>
        <div className="prototype-window">
            <div className="prototype-window__buttons">
                <button className="prototype-window__close">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <button className="prototype-window__resize">
                    <i className="fa-regular fa-window-restore"></i>
                </button>
                <button className="prototype-window__minimize">
                    <i className="fa-solid fa-window-minimize"></i>
                </button>
            </div>
            <div className="prototype-window__inner">
                {children}
            </div>
        </div>
        </>
    );
}


export default Windowcreate