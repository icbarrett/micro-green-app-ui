import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'
import TaskList from './TaskList';

function DayView({ day, date, taskList }) {
    
    return ( 
    <>
        <Card className="main-card">
        <Card.Title >Daily Tasks for {day}</Card.Title>
        <Card.Title className='taskDate'>{date}</Card.Title>
            <Card.Body>{<TaskList taskList={taskList}/>}</Card.Body>
        </Card>
        </>
    );
}

export default DayView
