import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import changeTheBanner from "./redux/reducers/bannercontrol";

import rootReducer from './redux/reducers/reducer';

const store = createStore(changeTheBanner,applyMiddleware(thunk))



// const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;