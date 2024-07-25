import React, { useState } from 'react'


function AddSkill( {addSkill, skills}) {
   var [message, setMessage] = useState("")
   
   function addNewSkill() {
       setMessage("")
       var skill = document.getElementById("txtSkill").value 
       // check whether skill is already present 
       var found = skills.find( v => v === skill)
       if(!found)
             addSkill(skill)  // invoke function in parent component 
       else
            setMessage("Duplicate Skill!")
   }

   return (
      <>
         <h3>Add Skill</h3>
         Skill <input type="text" id="txtSkill" /> <span>{message}</span>
         <p></p>
         <button onClick={addNewSkill}>Add</button>
      </>
   )

}


function ListSkills({skills}) {

   function deleteSkill(idx) {

   }
   return (
      <>
         <ul>
            {
               skills.map((s, idx) =>
                  <li key={idx}>
                     {s}  <button onClick={() => deleteSkill(idx)}>Del</button>
                  </li>)
            }
         </ul>
      </>
   )
}

export default function TechSkills() {
   var [skills, setSkills] = useState([])
   function deleteSkill(idxToDelete) {
      setSkills(skills.filter((v, idx) => idx !== idxToDelete))
   }
   function addNewSkill(skill) {
      setSkills([...skills, skill])
   }

   return (
      <>
         <h1>Tech Skills</h1>
         <AddSkill  addSkill={addNewSkill}  skills={skills}/>
         <ListSkills skills={skills}/>
      </>
   )
}
