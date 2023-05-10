import React, { useEffect } from "react";
import { categoriesData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { homeandlifestyle } from "../redux/actions";
export const Practice = () => {
  const dispatch = useDispatch();
  const categoriesdatafromreducer = useSelector((state) => state.categories);
  const homeandlifestyledatafromreducer = useSelector(
    (state) => state?.homeandlifestyle
  );

  useEffect(() => {
    dispatch(categoriesData({ type: "CATEGORIES", payload: [1, 2, 3, 4] }));
  }, [categoriesData]);
  console.log(categoriesdatafromreducer);

  // home and life style
  useEffect(() => {
    dispatch(homeandlifestyle({ type: "HOMEANDLIFESTYLE", payload: [1, 2] }));
  }, [homeandlifestyle]);
  console.log(homeandlifestyledatafromreducer?.homeandlifestyle?.data);
  return <></>;
};
