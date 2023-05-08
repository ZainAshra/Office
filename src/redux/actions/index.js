import axios from "axios";

 const fetchData = () => {
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
export default fetchData
