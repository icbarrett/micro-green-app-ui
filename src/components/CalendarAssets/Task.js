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

     useEffect(() => {
        fetch('http://localhost:8080/task', {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Headers": "Origin, Methods, Content-Type",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT"
            },
            body: JSON.stringify(
                {
                    "complete": checked,
                }
            )
  })

  .then(res => {
      if(res.ok) { console.log("PUT successful") }
      else { console.log("PUT not successful") }
      return res
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
      
       
      }, [checked])
      




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