
const initialstate = {
    ALLPRODUCTSDATA: [],
  };
  const allProductsData = (state = initialstate, action) => {
 
    switch (action.type) {
      case "ALLPRODUCTSDATA":
        return { ...state, ALLPRODUCTSDATA: action?.payload };
      default:
        return state;
    }
  };
  
  export default allProductsData;
  