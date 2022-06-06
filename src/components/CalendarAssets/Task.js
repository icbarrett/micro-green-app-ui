import axios from "axios";
import React, { useState, useEffect } from "react"


const Task = ({ clickedDay }) => {

    let tasks = [];
    const [data, setData] = useState([])
    const [taskId, setTaskId] = useState(1)
    console.log(taskId)
    let putRequestUrl = `http://localhost:8080/task/update/${taskId}`
   

    useEffect(() => {
        axios.get("http://localhost:8080/task")
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

    const [checked, setChecked] = useState(true)

    // console.log(tasks)

    const onChange = () => {
        setChecked(!checked)
        axios.put(putRequestUrl, {
           
            id: 1,
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