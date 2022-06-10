import axios from "axios";
import React, { useState, useEffect } from "react"


const Task = ({ id, task, complete }) => {
    
    let putRequestUrl = `http://localhost:8080/task/update/${id}`;

    const [checked, setChecked] = useState(complete);

    const onChange = () => {
        setChecked(!checked)
        console.log(checked)
        axios.put(putRequestUrl, {
            id: id,
            complete: !checked
        })
     };

    return (
        <div>
                <input type='checkbox' key={id} name={task}
                value={task} defaultChecked={complete} onChange={onChange}/>
                &nbsp; 
                {task}
                <br></br>            
        </div>
    );
}
export default Task