import React, { useState } from 'react'

export default function Interest() {
    var [amount, setAmount] = useState(0)
    var [rate, setRate] = useState(7)
    var [interest, setInterest] = useState(0)

    function updateAmount(e) {
        setAmount(e.target.value)
    }

    function updateRate(e) {
        setRate(e.target.value)
    }

    function calculate(e) {
        e.preventDefault()  // prevent refresh the page 
        setInterest(amount * rate / 100)
    }
    return (
        <>
            <form onSubmit={calculate}>
                <h3>Interest Calculation</h3>
                Amount <br />
                <input type="number" onChange={updateAmount} value={amount} required />
                <p></p>
                Rate of Interest <br />
                <input type="number" onChange={updateRate} value={rate} min={5} max={50} required />
                <p></p>
                <button>Calculate</button>
                <p></p>
                <h3>Interest = {interest} </h3>
            </form>
        </>
    )
}
