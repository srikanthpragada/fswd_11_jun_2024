import React from 'react'

export default function Course() {
  
  function getNow() {
    var now = new Date()
    return now.toString();
  }

  return (
     <>
        <h1>Course : React</h1>
        <h2>Trainer : Srikanth Pragada</h2>
        <hr />
        <h3>Now : {getNow()} </h3>
     </>
  )
}

