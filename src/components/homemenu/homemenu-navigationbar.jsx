import React, { useState, useEffect, useRef } from 'react'
import PopupNav from './homemenu-popupmenu'

import '../../css/main.css'

function Navigation() {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [openMenu, setopenMenu] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            setTime(`${hours}:${minutes}`);
            setDate(`${year}/${month}/${day}`);
        }, 1000);

        return () => clearInterval(interval)
    }, [])


    const toggleMenu = (event) => {
        event.stopPropagation();
        setopenMenu(!openMenu)
    };

    const clickOutsideMenu = (event) => {
            if (!event.target.closest('.main-nav') && openMenu) {
                setopenMenu(false)
            }
        }


    useEffect(() => {
        document.addEventListener('click', clickOutsideMenu)

        return () => {
            document.removeEventListener('click', clickOutsideMenu)
        }
    }, [openMenu])
    

    
    return(
        <>
            <nav>
                {openMenu && <PopupNav></PopupNav>}
                <div className="homemenu-logo" onClick={(event) => toggleMenu(event)}>
                    <div className="homemenu-logo__inner">
                        
                    </div>
                </div>
                <div className="homemenu-apps">

                </div>
                <div className="homemenu-calender">
                    <p className="homemenu-calender__time">{time}</p>
                    <p className="homemenu-calender__date">{date}</p>
                </div>
            </nav>
        </>
    );
}


export default Navigation