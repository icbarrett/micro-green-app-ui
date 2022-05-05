import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'
import DayTask from './DayTask';

function DayView({ day, date }) {

    

    return ( 
    <>
        <Card className="main-card">
            <Card.Body>
                
                    <Card.Title >Daily Tasks for {day}</Card.Title>
                    <Card.Title >{date}</Card.Title>
                    <Card.Text>{<DayTask />}</Card.Text>
                
            </Card.Body>
        </Card>
        </>
    );
}

export default DayView
