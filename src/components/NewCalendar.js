import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import DayView from "./CalendarAssets/DayView.js";

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    let day = "";
    const [todaysDate, setTodaysDate ] = useState('');
    const [clickedDay, setClickedDay] = useState(date.toISOString().split('T', 1).toString())

    useEffect(() => {
        setTodaysDate(date.toISOString().split('T', 1).toString())
    }, [])
    
    const handleChange = date => {
        setDate(date);
        setClickedDay(date.toISOString().split('T', 1).toString())
    }

    switch (date.getDay()) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            break;
    }
    
    return (
        <div className="container">
            <h1 className="heading">Today's Date {prevDate.toDateString()}</h1>
                <DayView className="dayView" day={day} date={date.toLocaleDateString()} clickedDay={clickedDay}/>
                <Calendar className="calendar" onChange={handleChange}  />
        </div>
    );
}


export default NewCalendar;