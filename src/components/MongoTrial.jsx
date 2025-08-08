import React, { useEffect, useState } from 'react'

const MongoTrial = () => {

    const [tasks, setTasks] = useState([{name: "hi", info: "this is default info"}])

  
    const getAllTasks = async () => {
      const apiUrl = "/api/tasks";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setTasks(data);
        alert("done")
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } 
    };

  
 
    
  return (
    <div>
        <div>MongoTest</div>
        { tasks.map((task, index) => (
           <p key={index}> { Object.values(task).join("  |  ") } <br/> {index} </p>
        )
        )}

        <button onClick={() => getAllTasks()}>Get All Tasks</button>
    </div>
  )
}

export default MongoTrial