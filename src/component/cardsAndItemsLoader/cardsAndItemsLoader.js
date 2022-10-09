import { getStoredCart } from "../addLocalStorage/addLocalStorage";

export const CardsAndItemsLoader = async () =>{
    const itemsData = await fetch ('products.json');
    const items = await itemsData.json() ; // converting data in Json and taking the whole data

    const LocalStoredData = getStoredCart() // LocalStore Function called
    
    // now distructure elements data from the localStorage
        const newStoredInData = []
    for(const id in LocalStoredData){
        //now took the whole item using 'find' by using 'id'
        const addedItems = items.find(item=>item.id === id) // here we are having the selected items full data into the 'addedItem' variable..just beacuse we need single data so that we using find, it gives us only one data if it will matched
        //now we setting the Quantity into the iteams real data from the localStorage
        if(addedItems){
            const quantity = LocalStoredData[id] // 'LocalStoredData[id]' is the valueo of loaclStorage data
            addedItems.quantity = quantity //and now we setting the LocalStorage value in to the items data quantity
            newStoredInData.push(addedItems) //and then item into a empty arrey which is called 'newStoredInData'
        } 
    }
    return {items : items, newStoredInData : newStoredInData} //returning this two things from the whole function
}