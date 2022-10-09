import React from 'react'
import './orderedItems.css'
function OrderedItems({data , removeItem}) {
    const {id ,name , price} = data
    // console.log(data)
  return (
    <div className='orderedItems'>
        <h4>Name: {name}</h4>
        <p>Price: {price}</p>
        <button onClick={()=>removeItem(id)} >Remove</button>
    </div>
  )
}

export default OrderedItems