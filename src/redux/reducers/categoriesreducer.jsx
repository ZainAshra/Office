const initialstate = {
    categories: [],
  };
  const categories = (state = initialstate, action) => {
    switch (action.type) {
      case "CATEGORIES":
        return { ...state, categories: action.payload };
        case "CLEAR":
          return {  };
      default:
        return state;
    }
  };
  console.log(initialstate);
  export default categories;
  