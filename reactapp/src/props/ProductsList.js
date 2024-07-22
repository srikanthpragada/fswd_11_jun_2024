
import React from 'react'

export default function ProductsList({products, company}) {
    return (
        <>
            <h2>Products of {company}</h2>
            <ul>
                {
                    products.map( (p, idx)  => <li key={idx}>{p.name} - {p.price}</li>)
                }
            </ul>
        </>
    )
}
