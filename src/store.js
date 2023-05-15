import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-key",
  storage,
};
const persistReduce = persistReducer(persistConfig, rootReducer);
const store = createStore(persistReduce,applyMiddleware(thunk));
export const persiststor = persistStore(store)
// const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;
