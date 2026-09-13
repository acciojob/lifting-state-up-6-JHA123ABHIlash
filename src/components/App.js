import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const[todos,setTodos]=useState([{id:1,todo:"Learn React",status:true},{id:2,todo:"Build a React app",status:true},{id:3,todo:"Deploy the React app",status:true}]);

  function handleComplete(id){
    const updated=todos.map((el)=>(el.id ===id ? {...el,status:false }:el));
    setTodos(updated);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Todo todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
