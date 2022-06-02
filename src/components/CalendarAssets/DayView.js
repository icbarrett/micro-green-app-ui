import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'
import Task from './Task';

function DayView({ day, date, clickedDay }) {

    return ( 
    <>
        <Card className="main-card">
        <Card.Title >Daily Tasks for {day}</Card.Title>
        <Card.Title className='taskDate'>{date}</Card.Title>
            <Card.Body>
                    <Task clickedDay={clickedDay}/>
                </Card.Body>
        </Card>
        </>
    );
}

export default DayView
