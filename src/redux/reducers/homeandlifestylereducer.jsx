const initialstate = {
    homeandlifestyle: [],
  };
  const homeandlifestyle = (state = initialstate, action) => {
    switch (action.type) {
      case "HOMEANDLIFESTYLE":
        return { ...state, homeandlifestyle: action.payload };
       
      default:
        return state;
    }
  };
  console.log(initialstate.homeandlifestyle);
  export default homeandlifestyle;
  