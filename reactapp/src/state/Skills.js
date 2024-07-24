import React, { useState } from 'react'

export default function Skills() {
  var [skills, setSkills] = useState([])

  function addSkill() {
     var skill = document.getElementById("txtSkill").value 
     setSkills([...skills, skill])
  }
  return (
     <>
      Skill : <input type="text" id="txtSkill" />
      <p></p>
      <button onClick={addSkill}>Add </button>
      <p></p>
      <ul>
         {
            skills.map( (s, idx) => <li key={idx}>{s}</li>)
         }
      </ul>
     </>
  )
}
