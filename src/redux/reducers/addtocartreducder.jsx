import { CART_SET_STATE_VALUE_BY_NAME } from "./addToCartType.js";

const initialstate = []

export const AddToCartReducder = (state = initialstate, action) => {
  console.log(action.payload,'dispatch')
  switch (action.type) {
    case "ADDTOCART":
      return [...state, action.payload];

    case "REMOVEITEM":
      return action.payload;

    case "REMOVEALL":
      return [];

    case "NEWDATA":
      // return [action.payload]
      return action.payload;
      
    default:
      return state;
  }
};
