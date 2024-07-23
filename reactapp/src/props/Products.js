
import React from 'react'


function Product(props) {
    return (
        <tr key={props.idx}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

function ProductHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    )
}

export default function Products({ products, company }) {
    return (
        <>
            <h2>Products of {company}</h2>
            <table className="table table-bordered">
                <ProductHeader />
                <tbody>
                    {
                        products.map(
                            (p, idx) => <Product product={p} idx={idx} />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
