import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'

function DayView({ day, date }) {

   

    return (
        <Card className="main-card">
            <Card.Body>
                <div>
                    <Card.Title >Daily Tasks for {day}</Card.Title>
                </div>
                <Card.Title >{date}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default DayView
