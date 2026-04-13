
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const data=[{todo:"Learn React",status:true},{todo:"Build a React app",status:true} , {todo:"Deploy the React app",status:true}];
  const [todos,setTodos]=useState(data);
console.log(todos);
  function handleComplete(id){
    setTodos(todos.map((todo,idx)=>(idx ===id ? {...todo,status:false}:todo)));
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
