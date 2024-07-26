import React, { useState } from 'react'

export default function InterestForm() {
    var [data, setData] = useState({amount : 0, rate : 7})
    var [interest, setInterest] = useState(0)

    function update(e) {
         setData( { ...data, [e.target.name] : e.target.value})
    }
    
    function calculate(e) {
        e.preventDefault()  // prevent refresh the page 
        setInterest(data.amount * data.rate / 100)
    }
    return (
        <>
            <form onSubmit={calculate}>
                <h3>Interest Calculation</h3>
                Amount <br />
                <input type="number" name="amount"
                       onChange={update} value={data.amount} required />
                <p></p>
                Rate of Interest <br />
                <input type="number" name="rate" 
                      onChange={update} value={data.rate} min={5} max={50} required />
                <p></p>
                <button>Calculate</button>
                <p></p>
                {
                 // conditional rendering 
                 interest > 0 ? <h3>Interest = {interest} </h3> : '' }

                {interest > 0 && <h3>Interest = {interest} </h3>}
            </form>
        </>
    )
}
