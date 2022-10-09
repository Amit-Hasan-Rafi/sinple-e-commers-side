import React from 'react'
import './order.css'
function Order({ordersDetails}) {

    //now calculate
    let total = 0;
    let itemsQuantity = 0
    for(const singleDitails of ordersDetails){                           //we having the single details from the of the whole arrey of the 'oderDetails' by looping
      itemsQuantity = itemsQuantity + singleDitails.quantity;
      total = total + singleDitails.price * itemsQuantity;

    }

    //now we adding tax which is was 10% , we can write it like 10/100 or 0.1
    const tax = parseFloat((total * 0.1).toFixed(2));                     //toFixed for, if the decimal number goes more than the limit we can fixed this out by this,  but by doing this it convert into sting. so must use parseFloat/parseInt
    const GrandTotal = total + tax
  return (
    <div className='order'>
          <h3>Orders</h3>
          <p>Total-Items: {itemsQuantity}</p>
          <p>Total-Price: {total}</p>
          <p>Total-tax: {tax}</p>
          <br />
          <h3>Grand-Total: {GrandTotal}</h3>
          </div>
  )
}

export default Order