

const initialstate ={
    PRODUCTDESCRIPTION:[]
}

const ProductDescriptionReducer = (state = initialstate, action) => {
 
    switch (action.type) {
      case "PRODUCTDESCRIPTION":
        return {  PRODUCTDESCRIPTION: action?.payload };
      default:
        return state;
    }
  };
  
  export default ProductDescriptionReducer;
  