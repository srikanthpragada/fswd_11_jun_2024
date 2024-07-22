import React from 'react'

// export default function Product(props) {
//   return (
//      <>
//        <h2>Name : {props.name} </h2>
//        <h3>Price: {props.price} </h3>
//      </>
//   )
// }


export default function Product({name, price}) {
    return (
       <>
         <h2>Name : {name} </h2>
         <h3>Price: {price} </h3>
       </>
    )
  }
  