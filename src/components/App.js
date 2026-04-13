
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  
  const [todos,setTodos]=useState([{id:1,todo:"Learn React",status:true },{id:2,todo:"Build a React app",status:true} , {id:3,todo:"Deploy the React app",status:true}]);

  function handleComplete(id){
    
    setTodos(prev=>prev.map((todo)=>(todo.id ===id ? {...todo,status:false }:todo)));
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App;
