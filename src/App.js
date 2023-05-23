import React from 'react';
import './App.css';


import Main from './components/Mainsection';
import Bannercontrol from './redux/reducers/bannercontrol';
import { Banner } from './redux/banner';
import Notfound from './components/notfound';
import Allcards from './components/allcards';
import { Practice } from './components/practice';
import ShoppingCart from './components/shoppingcart';
import Choisecat from './components/choisecat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProductDescription from './components/productDescription';
import HeaderBootstap from './components/mainheader';



function App() {
  return (
    <>

{/* <Notfound/> */}
{/* <Allcards/> */}
{/* <Practice/> */}
 

 {/* <ProductDescription/> */}
 <Router>
 <Switch>
          <Route path="/shoppingCart">
          <ShoppingCart/>
          </Route>
          
          <Route path="/ProductDescription">
         <ProductDescription/>
          </Route>

          <Route path="/choisecat">
         <Choisecat/>
          </Route>



          <Route path="/">
          <Main/>
          </Route>
        </Switch>
        
</Router>

   </>
  )
;}

export default App;
