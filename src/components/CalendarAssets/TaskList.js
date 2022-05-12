import React from "react";
import Task from "./Task";

const TaskList = ({taskList}) => {
    const listItems = taskList.map(task => {
        return (
        <Task task={task}/>    
    )})
    return(
        <div>
            {listItems}
        </div>
    )
}

export default TaskList;