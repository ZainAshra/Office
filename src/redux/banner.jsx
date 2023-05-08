import { fetchData } from "./actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Banner = () => {
  // const dispatch = useDispatch();

  // const photosState = useSelector(({ photos }) => photos);

  // console.log(photosState, "ph");
  // useEffect(() => {
  //   // console.log(store.getState(photosState),'photosState');

  //   dispatch(fetchData());
  // }, []);

  return (
    <>
      <div>
        <img src="" />
      </div>
    </>
  );
};
