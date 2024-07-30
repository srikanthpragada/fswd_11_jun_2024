import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')
    const [message, setMessage] = useState('')

    //useEffect(getDateTime, []);

    function getDateTime() {
        setMessage("Processing...")
        $.getJSON('http://worldtimeapi.org/api/timezone/Asia/Kolkata',
            (data) => {
                setNow(data.datetime)
                setMessage("")
            }
        )
    }

    function getDateTimeUTC() {
        setMessage("Processing...")
        $.getJSON('http://worldtimeapi.org/api/timezone/Etc/UTC',
            (data) => {
                setNow(data.datetime)
                setMessage("")
            }
        )
    }

    return (
        <>
            <h2>AJAX with jQuery</h2>
            <hr/>
            <h1>{now}</h1>
            <button onClick={getDateTime}>Get IST</button>
            &nbsp;
            <button onClick={getDateTimeUTC}>Get UTC </button>
            <div>{message}</div>
        </>
    )
}
