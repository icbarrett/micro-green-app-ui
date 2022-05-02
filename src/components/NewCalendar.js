import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import { Container } from "react-bootstrap";
import DayView from "./CalendarAssets/DayView.js";

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();


    const onChange = date => {
        setDate(date)
    }


    return (
        <>
            <h1 className="heading">Today's Date</h1>
            <h2 className="selected-date">{prevDate.toDateString()}</h2>
            <Container>
                <div className="dayView"><DayView day={date.toDateString()} />
                </div>
                <div className="calendar-container">
                    <Calendar onChange={onChange} date={date} />
                </div>
            </Container>
        </>
    );
}


export default NewCalendar;