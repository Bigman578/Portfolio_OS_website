import '../../css/window.css'
import React, { useState ,useEffect} from 'react'

function Windowcreate({ children }) {
    const [isHeld, setIsHeld] = useState(false);
    const [windowPosition, setWindowPosition] = useState({x: 0, y: 0});
    const [offset, setOffset] = useState({x: 0, y: 0});

    const handleWindowStart = (event) => {
        setIsHeld(true);
        setOffset({
            x: event.clientX - windowPosition.x,
            y: event.clientY - windowPosition.y
        });
    }
    
    const handleWindowDrag = (event) => {
        if (!isHeld) return;
        const newX = event.clientX - offset.x;
        const newY = event.clientY - offset.y;
        setWindowPosition({ x: newX, y: newY});
        console.log(windowPosition)
    }

    const handleWindowStop = (event) => {
        setIsHeld(false);

        const newX = event.clientX - offset.x;
        const newY = event.clientY - offset.y;
        setWindowPosition({ x: newX, y: newY});

    }

    useEffect(()=>{

        const window = document.querySelector('.prototype-window')
        console.log('x: ' + window.style.left  + ', y: ' + window.style.top)
        console.log(windowPosition)

    },[windowPosition])

    
    return (
        <div className="prototype-window" style={{top: windowPosition.y + 70 + 'px', left: windowPosition.x+ 350 + 'px'}} draggable={true} onDragStart={handleWindowStart} onDrag={handleWindowDrag} onDragEnd={handleWindowStop}>
            <div draggable={false} className="prototype-window__buttons">
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
            <div draggable={false} className="prototype-window__inner">
                {children}
            </div>
        </div>
    );
}



export default Windowcreate