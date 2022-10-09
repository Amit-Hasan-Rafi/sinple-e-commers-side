import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { addTolocalstorage, getStoredCart } from '../addLocalStorage/addLocalStorage'
import Item from '../items/item'
import Order from '../order/Order'
import './cards.css'


function Card() {
  const [N_cards_E , setN_cards_E] = useState([])
  
  /*const [cards, setCards ] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])*/ /* noramlly we load data like this */

    //but by React-Router , we can load data like this also :=
     const cards = useLoaderData(); // we dont have to set anything just only declair the variable

  /** localStorage data load **/ 
    useEffect(()=>{
     let storedData = getStoredCart()
     const saveIntoCard = []
     for(const id in storedData){
       const addData = cards.find(card=>card.id === id)  // by doing this loop with 'find' we getting the single item data, whatever how may quantity it has it will returns once
       if(addData){
        const itemQuantity = storedData[id]              // "storedData[id]" by this we having the value of the localStorage, so we can replace it with our product quantity valuez
        addData.quantity = itemQuantity                  // now if you console the 'addData' you can figure out the quantity value has changed with our localstorege value
        saveIntoCard.push(addData)                       // we pusing the whole thing into the "saveIntoCard" empty arrey
       }
     }
     setN_cards_E(saveIntoCard)                          //and set that in the order state by using "setN_cards_E"....and after seting this the order component details are also setting based on it
      },[cards])                                         // by giving the paramiter in here..thats means with a [] it can be use just once , but when we give a paramiter which property we want to use, we can use it every single time


    //products adding
    const addToCartbtn = (cards) =>{
      let newCards = [];
      const exsit = N_cards_E.find(item =>item.id === cards.id ) //cheacking if the " N_cards_E" items id and "cards" items id match
      if(!exsit){
        cards.quantity = 1;                                 // then the cards.quantity will be 1
        newCards = [...N_cards_E,cards]              //in here we adding the pervious state elements to the new state.....and must add the new state variable first and then the pervious state variable
      }
      else{
        const restItems = N_cards_E.filter(item =>item.id !== cards.id)
        exsit.quantity = exsit.quantity + 1;
        newCards = [...restItems,exsit]
      }

      setN_cards_E(newCards)                             // and here we setting the whole things into the newState of (8.line)
      addTolocalstorage(cards.id)                        //localStorage function
                                                         // the 'N_cards_E' is an empty arrey ,,when we click the addItemBtn it will start filling of that card details 
     }
  return (
   <div className='main-layout'>
     <div className='cards'>
        {
          cards.map(items=><Item key={items.id} item={items} cartBtn={addToCartbtn} ></Item>)
        }
    </div>
     <div>
          <Order ordersDetails={N_cards_E} ></Order>
    </div>
   </div>
  )
}

export default Card