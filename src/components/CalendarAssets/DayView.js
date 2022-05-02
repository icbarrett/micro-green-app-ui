import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'


function DayView({ day }) {

    const getDay = () => {
        switch (day) {
            case 0:
                day = 'Sunday'
                break;
        
            default:
                break;
        }
    }
    

    return (
        <Card className="main-card">
            <Card.Body>
                <div>
                    <Card.Title className="md-0 font-weight-bold">Daily Tasks for {day}</Card.Title>
                </div>
                <Card.Text className="text-secondary"></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DayView
