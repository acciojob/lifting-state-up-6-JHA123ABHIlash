import React, { useState } from "react"

export default function Todo({todos,handleComplete}){
    
    return(
       <ul>
         {todos.map((el)=>(
            <li key={el.id}> {el.todo} <button onClick={()=>handleComplete(el.id)}>Complete</button></li>
         ))}
       </ul>
    )
}