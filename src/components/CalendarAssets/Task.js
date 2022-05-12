import React from "react"

const Task = ({task}) => {
    return (
        <div>
            <label><input type='checkbox'/> - </label>
            {task.task}
        </div>
    )
}
export default Task