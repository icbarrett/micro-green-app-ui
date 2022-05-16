import React from "react"

const Task = ({task}) => {
    return (
        <div>
            <input type='checkbox'/>&nbsp;
            {task.taskName}
        </div>
    )
}
export default Task