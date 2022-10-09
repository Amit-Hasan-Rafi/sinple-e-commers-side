import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { removeFromDb } from '../addLocalStorage/addLocalStorage'
import { CardsAndItemsLoader } from '../cardsAndItemsLoader/cardsAndItemsLoader'
import Order from '../order/Order'
import OrderedItems from '../orderedItems/orderedItems'
import './OrderPage.css'
function OrderPage() {
  const {items, newStoredInData} = useLoaderData() //load the datas from the 'CardsAndItemsLoader' function what we retuen
 
  const [N_cards_E , setN_cards_E] = useState(newStoredInData) // this useState is dipandend with the 'newStoredInData'..and we copy the state from the cards component file, so that the layoyt structure(just cloning that things)

  const removeItem =(id)=>{
    const removing = N_cards_E.filter(item => item.id !== id) //what we are doing is, we looping every items id by filter and when the ids are not matching with eachOthers, that id or item are getting removed
    setN_cards_E(removing)
    removeFromDb(id) // as we know our products ar connectd with the localStorage, so if we don't remove items from their ,It wouldn't be removed from everywhere. so we must remove data from their also
  }

  return (
    <div className='main-layout'>
     <div className='ordered-items'>
       {
        N_cards_E.map(data=><OrderedItems key={data.id} data={data} removeItem={removeItem}></OrderedItems>)
       }
    </div>
     <div>
          <Order ordersDetails={N_cards_E} ></Order>
    </div>
   </div>
  )
}

export default OrderPage