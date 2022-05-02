import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import { Container } from "react-bootstrap";
import DayView from "./calendarAssets/DayView.js";

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    let day = ""


    const onChange = date => {
        setDate(date)
    }



    // if (date.getDay() === 0) {
    //     day = 'Sunday'
    // }

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
            <h2 className="selected-date"></h2>
            <Container>
                <div className="dayView"><DayView day={day} date={date.toLocaleDateString()} />
                </div>
                <div className="calendar-container">
                    <Calendar onChange={onChange} date={date} />
                </div>
            </Container>
        </>
    );
}


export default NewCalendar;