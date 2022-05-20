import React from "react";
import Task from "./Task";

const TaskList = ({taskList}) => {
    return(
        <div>
            {taskList.map(task => {
                return (
                    <Task key={task.id} task={task} />
                )
            })}
        </div>
    )
}

export default TaskList;