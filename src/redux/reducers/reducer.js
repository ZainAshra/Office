import changeTheBanner from "./bannercontrol";
import categories from "./categoriesreducer";
import { combineReducers } from "redux";
import homeandlifestyle from "./homeandlifestylereducer";
const rootReducer =combineReducers({
    changeTheBanner: changeTheBanner ,
    categories:categories,
    homeandlifestyle: homeandlifestyle,
   
})

export default rootReducer;