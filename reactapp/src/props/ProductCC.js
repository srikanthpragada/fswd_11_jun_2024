import React, { Component } from 'react'

export default class ProductCC extends Component {
    constructor(props) {
        super(props)
        this.name = props.name
        this.price = props.price
    }

    render() {
        return (
            <>
                <h2>Name : {this.name} </h2>
                <h3>Price: {this.price} </h3>
            </>
        )
    }
}
