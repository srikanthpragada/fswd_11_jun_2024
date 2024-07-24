import React, { useState } from 'react'

export default function Counter() {
  var [count, setCount] = useState(0)

  function inc() {
    setCount(count + 1)
  }
  function dec() {
    setCount(count - 1)
  }


  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  )
}
