const initialstate = {
  PLENTYSMART: [],
  WHOLESALE: [],
  BEAUTYANDGROOMING: [],
};
export const allcardsData = (state = initialstate, action) => {
  switch (action.type) {
    case "PLENTYSMART":
      return { ...state, PLENTYSMART: action.payload };
  
    case "WHOLESALE":
      return { ...state, WHOLESALE: action.payload };

    case "BEAUTYANDGROOMING":
      return { ...state, BEAUTYANDGROOMING: action.payload };

    default:
      return state;
  }
};
