import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'
import Task from './Task';

function DayView({ day, date, clickedDay }) {

    let tasks = [];
    
    const [data, setData] = useState([])  
    
    useEffect(() => {
        axios.get("http://localhost:8080/task")
        .then(res => { 
            setData(res.data)
        })
        .catch(err => console.error(err))
      }, [])
      

      for (let index = 0; index < data.length; index++) {
        
        if (data[index].dueDate === clickedDay) {
            tasks.push(data[index])
            
        }
        
    }

    return ( 
    <>
        <Card className="main-card">
            <Card.Title >Daily Tasks for {day}</Card.Title>
                <Card.Title className='taskDate'>{date}</Card.Title>
                    <Card.Body>
                        <div>{tasks.map(task => {
                            return(<Task key={task.id} id={task.id} task={task.task} complete={task.complete}/>)})}
                        </div>    
                </Card.Body>
        </Card>
    </>
    );
}

export default DayView
