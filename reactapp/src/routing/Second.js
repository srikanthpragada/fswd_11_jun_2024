import React from 'react'
import { useNavigate} from "react-router-dom";

export default function Second() {
  let navigate = useNavigate()

  function goFirst() {
        navigate("/first")
  }
  function goError() {
    navigate("/error")
}

  return (
    <>
     <h1>Second Component</h1>
     <button onClick={goFirst}>First</button>
     <button onClick={goError}>Error</button>
     </>
  )
}
