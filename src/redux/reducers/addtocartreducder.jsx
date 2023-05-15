const initialstate = [];
export const AddToCartReducder =(state= initialstate,action)=>{
console.log(action.payload)
    switch (action.type) {
        case "ADDTOCART" :
            
          return [...state,action.payload];
    
        default:
          return state;
      }

}