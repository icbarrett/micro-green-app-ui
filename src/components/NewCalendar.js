import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import DayView from "./CalendarAssets/DayView.js";
import data from './anotherDummy.json';
import moreData from './dummyData.json'

function NewCalendar() {
    const [date, setDate] = useState(new Date());
    const prevDate = new Date();
    const [ tasks, setTasks ] = useState([]);
    let day = "";
    let todaysDate = date.toISOString().split('T', 1)[0];
    
    

    for (let index = 0; index < data.length; index++) {
        
        if (data[index].dueDate.includes(todaysDate)) {
            tasks.push(data[index])
            
        }
        
    }
    
    
    const handleChange = date => {
        setDate(date);
        updateTasks();
        
    }

    const updateTasks = () => {
        setTasks(tasks)
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
                <DayView className="dayView" day={day} date={date.toLocaleDateString()} taskList={tasks}/>
                <Calendar className="calendar" onChange={handleChange} date={date} />
                
        </div>
    );
}


export default NewCalendar;