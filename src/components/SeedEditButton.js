import axios from "axios";
import React, { useState, useEffect } from "react"


const SeedEditButton = ({ clickedSeed }) => {

    let tasks = [];
    const [data, setData] = useState([]);
    const [seedId, setSeedId] = useState(1);
    console.log(seedId);
    let putRequestUrl = `http://localhost:8080/inventory/update/${seedId}`;
   

    useEffect(() => {
        axios.get("http://localhost:8080/inventory")
        .then(res => { 
            setData(res.data)
        })
        .catch(err => console.error(err))
      }, [])
      

    //   for (let index = 0; index < data.length; index++) {
        
    //     if (data[index]. === clickedSeed) {
    //         seeds.push(data[index])
            
    //     }
        
    // }

    const [checked, setChecked] = useState(true)

    // console.log(tasks)

    const onChange = () => {
        setChecked(!checked)
        axios.put(putRequestUrl, {
           
            id: 1,
            complete: checked
            
        })

     }


}
export default SeedEditButton