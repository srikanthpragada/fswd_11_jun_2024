import React from 'react'

export default function CounterNonState() {
  var count = 0

  function inc() {
      count ++;
      console.log(count);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </>
  )
}
