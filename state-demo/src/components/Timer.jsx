import {useState} from 'react';

export default function Timer () {
    const [time, setTime] = useState(0); 

    setTimeout(() => {
        // setTime(time + 1)
        setTime(oldTime => oldTime +1); // Protects from racing congitions
    }, 1000);
    return (
        <>
            <h2>Timer</h2>
            <p>{time}</p>
        </>
    );
}