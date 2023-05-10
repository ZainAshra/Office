import axios from "axios";

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.plentys.pk/api/v1/public/banner?cityId=1%20Request%20Method:%20GET"
      )
      .then((response) => {
        console.log(response.data.data);
        dispatch({ type: "BANNER", payload: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const categoriesData = () => {
  return (dispatch) => {
    axios
      .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")
      .then((response) => {
        console.log(response.data?.data, "categoriesapi");

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

//home and life style
export const homeandlifestyle = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=4&minPrice=4&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1"
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "HOMEANDLIFESTYLE",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
// export default fetchData;
