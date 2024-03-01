import React, { useState, useEffect } from 'react'
import '../../css/main.css'

function Navigation() {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

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

    

    return(
        <>
            <nav>
                <div className="homemenu-logo" id="Homemenu-btn">
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