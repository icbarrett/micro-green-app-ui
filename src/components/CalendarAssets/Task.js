import axios from "axios";
import React, { useState, useEffect } from "react"


const Task = ({ clickedDay }) => {

    let tasks = [];
    const [data, setData] = useState([])
    const [taskId, setTaskId] = useState(1)
    let putRequestUrl = (taskId) => `/task/update/${taskId}`
   

    useEffect(() => {
        axios.get("/task")
        .then(res => { 
            setData(res.data)
        })
        .catch(err => console.error(err))
      }, [])
      

      for (let index = 0; index < data.length; index++) {
        
        if (data[index].dueDate === clickedDay) {
            tasks.push(data[index])
            
        }
        
    }

    const [checked, setChecked] = useState(false)

    // console.log(tasks)

    const onChange = () => {
        setChecked(!checked)
        axios.put("/task", {
            
            id: taskId,
            complete: checked
            
        })

     }

    return (
        <div>{tasks.map(task => {
            return (<>
                <input key={task.id} type='checkbox' defaultChecked={checked} onChange={onChange}/>
                {task.task}
                </>
            )
        })}</div>
    )
}
export default Task