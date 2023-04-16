import './DigitalClock.css';

import { useEffect, useState } from "react"

export default function DigitalClock(){

    const [digital, setDigital] = useState();

    useEffect(() => {
        setInterval(()=>{
            const hora = new Date();
            setDigital(hora.toLocaleTimeString());
        },1000)
    }, [])

    return(
        <div>
            <h2 className="reloj-digital">{digital}</h2>
        </div>
    )
}