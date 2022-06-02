import React, { useState, useEffect } from "react"

const Task = ({ clickedDay }) => {

    let tasks = [];
    const [data, setData] = useState([])
   

    useEffect(() => {
        fetch("http://localhost:8080/task")
        .then(response => response.json())
        .then(data => setData(data)) 
      }, [])

      for (let index = 0; index < data.length; index++) {
        
        if (data[index].dueDate === clickedDay) {
            tasks.push(data[index])
            
        }
        
    }

    const [checked, setChecked] = useState(false)

    console.log(tasks)

    const onChange = (task) => {
        setChecked(!checked)

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