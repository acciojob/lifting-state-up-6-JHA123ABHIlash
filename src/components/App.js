
import React from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const[todos,setTodos]=useState([{id:1,todo:"Learn React"},{id:2,todo:"Build a React app"},{id:3,todo:"Deploy the React app"}]);

  function handleComplete(id){
    todos.filter((el,idx)=>(idx !==id));
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Todo todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
