
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  
  const [todos,setTodos]=useState([{id:1,todo:"Learn React",status:true },{id:2,todo:"Build a React app",status:true} , {id:3,todo:"Deploy the React app",status:true}]);

  function handleComplete(id){
    let updatedTodo=todos.map((todo)=>(todo.id ===id ? {...todo,status:false }:todo));
    setTodos(updatedTodo);
  }
  return (
    <div>
        
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App;
