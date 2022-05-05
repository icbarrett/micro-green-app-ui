import './Calendar.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../dummyData.json'
import TaskList from './TaskList';



function DayTask() {
    
    const [ taskList, setTaskList ] = useState(data)

    return(
        <>
        <Card className="task-card">
            <Card.Body className="card-body">
                <div className="justify-div">
                </div>
                <Card.Text className="card-text">{<TaskList taskList={taskList}/>}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default DayTask;