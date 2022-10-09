import React from 'react'
import './items.css'
function Item({item, cartBtn} ) {                                   // by this we calling the items what we gaved to the 'items' component from 'cards' component
  const {name , price , seller } = item;

  return (
    <div className='items'>
        <p>name: {name}</p>
        <p>Price: {price}</p>
        <p>seller: {seller}</p>
        <button onClick={()=>cartBtn(item)}>add to cart</button>   {/* by giving 'cartBtn(item)' 'item' paramiter we calling the whole 'items' elements  and we wraping the function by "()=>...()" so that it would not call it by a single time.. */}
    </div>
  )
}

export default Item