import './Countdown.css'
import { useEffect, useState } from "react"

export default function Countdown(){

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    const handelInputChange = ({target}) => {
        setDate(new Date(target.value));
        setTime();
    }

    useEffect(() => {
        
        let x = setInterval(()=>{

            let now = new Date().getTime();
            let distance = date - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance < 0) {
                clearInterval(x);
                setTime("COUNTDOWN FINISHED");
              }

        }, 1000);

        return () => {
            clearInterval(x);
        }

    },[date])


    return(
        <div >
            <h2 className="contdown">{time}</h2>
            <input type="date" name="fecha" value={date} onChange={handelInputChange}/>
        </div>
    )
}