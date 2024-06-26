import '../../css/window.css'
import React, { useState , useEffect, Children } from 'react'
import Portfolio from './Apps/MyPortfolio.jsx'

function Windowcreate({children, closeWindow, windowSize}) {
    const [isHeld, setIsHeld] = useState(false);
    const [windowPosition, setWindowPosition] = useState({x: 0, y: 0});
    const [offset, setOffset] = useState({x: 0, y: 0});
    // const window = document.querySelector('.prototype-window')

    const handleWindowStart = (event) => {
        if (event.target.className === 'prototype-window') {
            setIsHeld(true);
            setOffset({
                x: event.clientX - windowPosition.x,
                y: event.clientY - windowPosition.y
            });
        }
        console.log(event.target.className)
    }
    
    const handleWindowDrag = (event) => {
        if (!isHeld) {return};
        const newX = event.clientX - offset.x;
        const newY = event.clientY - offset.y;
        setWindowPosition({ x: newX, y: newY});

    }

    const handleWindowStop = (event) => {
        if (isHeld){
            setIsHeld(false);        
            const newX = event.clientX - offset.x;
            const newY = event.clientY - offset.y;
            console.log(newX, newY)
            setWindowPosition({ x: newX, y: newY});
        }
    }

    const removeWindow = () => {
        closeWindow(false)
    }

    useEffect(()=>{
        const window = document.querySelector('.prototype-window')
        console.log(window.transform)
        console.log(windowPosition)
        console.log(offset)

    },[windowPosition])

    
    return (
            <div 
            className="prototype-window"
            style={{transform: `translate(${windowPosition.x}px, ${windowPosition.y}px)`}}
            onMouseDown={handleWindowStart}
            onMouseMove={handleWindowDrag} 
            onMouseUp={handleWindowStop}
            >
            <div className="prototype-window__buttons">
                <button className="prototype-window__close" onClick={removeWindow}>
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
    );
}


export default Windowcreate