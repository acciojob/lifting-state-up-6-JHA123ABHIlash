import React from 'react'

export default function Child({todos,handleComplete}) {
    // function handleComplete(id){
    //     todos.filter((todo,idx)=>idx ==id);
    // }
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.todo}
                {todo.status && (<button onClick={()=>handleComplete(todo.id)}>Complete</button>)}
                
                </li>
            ))}
        </ul>
    </div>
  )
}
