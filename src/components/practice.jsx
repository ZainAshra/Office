import React, { useEffect } from "react";
import { cardsData, categoriesData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash"
export const Practice = () => {
  const dispatch = useDispatch();
  const categoriesdatafromstore = useSelector((state) => state.categories);
 
  const allcardscategoriesdatafromstore = useSelector((state)=>state.allcardsData)
  console.log(allcardscategoriesdatafromstore.WHOLESALE)
  let obj = Object.keys(allcardscategoriesdatafromstore)
  console.log(obj)

  // useEffect(() => {
  //   dispatch(categoriesData({ type: "CATEGORIES", payload: [] }));
  // }, [categoriesData]);
  // console.log(categoriesdatafromstore);


 



  useEffect(()=>{

  const promise1=  dispatch(cardsData(1955,"WHOLESALE"))
  const promise2=  dispatch(cardsData(1949,"PLENTYSMART"))
  const promise3=  dispatch(cardsData(5,"BEAUTYANDGROOMING"))

    Promise.all([promise1,promise2,promise3])

  },[])



  return <>



  </>;
};
