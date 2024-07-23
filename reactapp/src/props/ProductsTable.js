
import React from 'react'

export default function ProductsTable({ products, company }) {
    return (
        <>
            <h2>Products of {company}</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
