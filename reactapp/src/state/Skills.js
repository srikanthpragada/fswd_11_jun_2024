import React, { useState } from 'react'

export default function Skills() {
  var [skills, setSkills] = useState([])
  var [message, setMessage] = useState("")

  function addSkill() {
     setMessage("")
     var skill = document.getElementById("txtSkill").value 
     // check whether skill is already present 
     var found = skills.find( v => v === skill)
     if(!found)
          setSkills([...skills, skill])
     else
          setMessage("Duplicate Skill!")
  }

  function deleteSkill(idxToDelete) {

      setSkills( skills.filter( (v, idx) =>  idx !== idxToDelete) )

  }

  return (
     <>
      Skill : <input type="text" id="txtSkill" /> <span className="text-danger">{message}</span>
      <p></p>
      <button onClick={addSkill}>Add </button>
      <p></p>
      <ul>
         {
            skills.map( (s, idx) => 
                  <li key={idx}>
                      {s}  <button onClick={ () => deleteSkill(idx)}>Del</button>
                  </li>)
         }
      </ul>
     </>
  )
}
