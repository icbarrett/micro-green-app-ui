import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import DayView from "./CalendarAssets/DayView.js";
import data from './anotherDummy.json';


function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    let day = ""

    const onChange = date => {
        setDate(date)
    }

    // const onClickDay = () => {
    //     console.log(day)
        
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

    const [ taskList, setTaskList ] = useState({})
    
    return (
        <div>
            <h1 className="heading">Today's Date {prevDate.toDateString()}</h1>
            <div className="dayView"><DayView day={day} date={date.toLocaleDateString()} taskList={taskList}/>
            </div>
            <div className="calendar">
                <Calendar onChange={onChange} date={date}  onClickDay={() => {setTaskList(data)}}/>
            </div>
        </div>
    );
}


export default NewCalendar;