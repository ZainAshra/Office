import { CART_SET_STATE_VALUE_BY_NAME } from "./addToCartType.js";

const initialstate = []

export const AddToCartReducder = (state = initialstate, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [...state, action.payload];
    case "REMOVEITEM":
      return action.payload;
      case "REMOVEALL":
      return [];
    default:
      return state;
  }
};
