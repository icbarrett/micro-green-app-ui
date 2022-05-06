import './Calendar.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskList from './TaskList';



function DayTask({taskList}) {
    

    return(
        <div>
        <Card className="task-card">
            <Card.Body className="card-body">
                <div className="justify-div">
                </div>
                {<TaskList taskList={taskList?.tasks}/>}
            </Card.Body>
        </Card>
        </div>
    )
}

export default DayTask;