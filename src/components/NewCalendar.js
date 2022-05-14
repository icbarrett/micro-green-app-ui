import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import DayView from "./CalendarAssets/DayView.js";
import data from './anotherDummy.json';
import moreData from './dummyData.json';

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    const [ taskList, setTaskList ] = useState(moreData)
    let day = ""

    console.log(taskList)
    

    const handleChange = date => {
        setDate(date);
        updateTaskList()
    }

    const updateTaskList = () => {
        setTaskList(data)
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
        <div>
            <h1 className="heading">Today's Date {prevDate.toDateString()}</h1>
            <DayView className="dayView" day={day} date={date.toLocaleDateString()} taskList={taskList}/>
                <Calendar className="calendar" onChange={handleChange} date={date} />               
        </div>
    );
}


export default NewCalendar;