import React from 'react'

export default function Child({todos,handleComplete}) {
    // function handleComplete(id){
    //     todos.filter((todo,idx)=>idx ==id);
    // }
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
            {todos.map((todo, idx)=>(
                <li key={idx}>{todo.todo}
                {todo.status && <button onClick={()=>handleComplete(idx)}>Complete</button>}
                
                </li>
            ))}
        </ul>
    </div>
  )
}
