import axios from "axios";
import { CART_SET_STATE_VALUE_BY_NAME } from "../reducers/addToCartType";

export const cartSetStateValueByName = (name, value) => {
  return (dispatch, getState) => {
    dispatch({
      type: CART_SET_STATE_VALUE_BY_NAME,
      name,
      value,
    });
    return Promise.resolve(
      getState().AddToCartReducder,
      getState().AddToCartReducder[name]
    );
  };
};



export const fetchData = () => {
  try {
    return async (dispatch) => {
      let response = await fetch(
        "https://api.plentys.pk/api/v1/public/banner?cityId=1%20Request%20Method:%20GET"
      );
      let parseData = await response.json();
      dispatch({
        type: "BANNER",
        payload: parseData.data,
      });
      // console.log(parseData,"parsedata")
    };
  } catch (error) {
    console.log(error);
  }
};

// export const fetchData = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://api.plentys.pk/api/v1/public/banner?cityId=1%20Request%20Method:%20GET"
//       )
//       .then((response) => {
//         dispatch({ type: "BANNER", payload: response.data.data });
        
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const categoriesData = () => {
  return (dispatch) => {
    axios
      .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")
      .then((response) => {
        // console.log(response.data?.data, "categoriesapi");

        dispatch({
          type: "CATEGORIES",
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error, "categoriesapierror");
      });
  };
};

export const cardsData = (id, actionName) => {
  try {
    return async (dispatch) => {
      let response = await fetch(
        `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=${id}&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`
      );
      let parseData = await response.json();
      dispatch({
        type: actionName,
        payload: parseData.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const addtocartdata = (type, data) => {
  // console.log(data,type,"action")
  return (dispatch) => {
    dispatch({
      type: type,
      payload: data,
    });
  };
};

export const cardsCount = (type,count)=>{
  return(dispatch)=>{
    dispatch({
      type:type,
      payload:count
    })
  }
}


export const choiseCat = (id, actionName) => {
  try {
    return async (dispatch) => {
      let response = await fetch(
        `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=${id}&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`
      );
      let parseData = await response.json();
      dispatch({
        type: actionName,
        payload: parseData.data,
      });
      
    };
  } catch (error) {
    console.log(error);
  }
};


export const allproductsdata = (actionName) => {

  try {
    return async (dispatch) => {
      let response = await fetch(
        `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`
      );
      let parseData = await response.json();
      
      dispatch({
        type: actionName,
        payload: parseData.data,
      });
      
    };
  } catch (error) {
    console.log(error);
  }
};

export const productDescriptionAction = (type,data)=>{
    return(dispatch)=>{
      dispatch({
        type:type,
        payload:data
      })
    }
}


export const similarProductsAction = (actionName,id) => {
  try {
    return async (dispatch) => {
      let response = await fetch(
        `https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=${id}&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`
      );
      let parseData = await response.json();
      dispatch({
        type: actionName,
        payload: parseData.data,
      });
      
    };
  } catch (error) {
    console.log(error);
  }
};
