import React from "react"

export default function Todo({todos,handleComplete}){
    
    return(
         <ul>

             <h2>Child Component</h2>

            {todos.map((el)=>(
              <li key={el.id}> {el.todo}
                  {el.status && <button onClick={()=>handleComplete(el.id)}>Complete</button>}
              </li>
            ))}
         </ul>
      
    )
}