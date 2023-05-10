import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/reducer';

// const store = createStore({changeTheBanner,categories},applyMiddleware(thunk))



const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;