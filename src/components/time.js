import React from 'react'
function Time () {
    var time = new Date().toLocaleTimeString();
    var year = new Date().getFullYear();
    var day = new Date().getDay();
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div>
            <h1>{time}</h1>
            <h6>{dayNames[day]}</h6>
            <p>{monthNames[month]} {date}, {year}</p>
        </div>
    )
}
export default Time;
