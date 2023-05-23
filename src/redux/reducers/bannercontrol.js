const initialstate = {
  photos: [],
};
const changeTheBanner = (state = initialstate, action) => {

  switch (action.type) {
    case "BANNER":
      return { ...state, photos: action?.payload };
    default:
      return state;
  }
};

export default changeTheBanner;
