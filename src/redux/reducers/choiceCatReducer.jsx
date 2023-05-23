const initialstate={
    CHOISECAT:[]
}

export const choiseCatReducer = (state = initialstate, action) => {
    switch (action.type) {
      case "CHOISECAT":
        return [action.payload];
      
       
      default:
        return state;
    }
  };
