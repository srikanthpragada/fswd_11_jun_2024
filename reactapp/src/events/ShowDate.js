import React from 'react'

export default function ShowDate() {

  function showDateTime() {
      var now = document.getElementById("now")
      now.innerHTML = new Date().toString()
  }  
  return (
    <>
      <button onClick={showDateTime}>Show Date and Time</button>
      <h1 id="now"></h1>
    </>
  )
}
