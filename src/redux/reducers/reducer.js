import changeTheBanner from "./bannercontrol";
import categories from "./categoriesreducer";
import { combineReducers } from "redux";
import homeandlifestyle from "./homeandlifestylereducer";
import {allcardsData} from '..//reducers/allcardsDataReducer'
const rootReducer =combineReducers({
    changeTheBanner: changeTheBanner ,
    categories:categories,
    homeandlifestyle: homeandlifestyle,
    allcardsData:allcardsData
   
})

export default rootReducer;