import axios from "axios";
import React, { useState, useEffect } from "react"


const Task = ({ clickedDay }) => {

    let tasks = [];
    const [data, setData] = useState([])
    const headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000/"
    }
   

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

    const [checked, setChecked] = useState(false)

    // console.log(tasks)

    const onChange = (task) => {
        setChecked(!checked)
        axios.patch("http://localhost:8080/task", { 
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