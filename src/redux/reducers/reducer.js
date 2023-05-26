import changeTheBanner from "./bannercontrol";
import categories from "./categoriesreducer";
import { combineReducers } from "redux";
import homeandlifestyle from "./homeandlifestylereducer";
import {allcardsData} from '..//reducers/allcardsDataReducer'
import  {AddToCartReducder } from "./addtocartreducder";
import { choiseCatReducer } from "./choiceCatReducer";
import allProductsData from "./allproductsdatareducer";
const rootReducer =combineReducers({
    changeTheBanner: changeTheBanner ,
    categories:categories,
    homeandlifestyle: homeandlifestyle,
    allcardsData:allcardsData,
    AddToCartReducder:AddToCartReducder,
    choiseCatReducer:choiseCatReducer,
    allProductsData:allProductsData
   
    
    
   
})

export default rootReducer;