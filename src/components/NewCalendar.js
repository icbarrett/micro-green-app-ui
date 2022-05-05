import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import DayTask from "./CalendarAssets/DayTask.js";
import DayView from "./CalendarAssets/DayView.js";
import data from './dummyData.json'

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    let day = ""

    


    const onChange = date => {
        setDate(date)
    }

    const onClickDay = (e) => {
        

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
        <>
            <h1 className="heading">Today's Date {prevDate.toDateString()}</h1>
            <div className="dayView"><DayView day={day} date={date.toLocaleDateString()} />
            </div>
            <div className="calendar">
                <Calendar onChange={onChange} date={date} onClickDay={onClickDay} />
            </div>
        </>
    );
}


export default NewCalendar;