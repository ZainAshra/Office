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
import Footer from "./components/footer.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProductDescription from './components/productDescription';
import HeaderBootstap from './components/mainheader';
import Login from './components/login';
import Signup from './components/signup';
import Practice2 from './components/practice2';
import Forgetpassword from './components/forgetpassword';



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

          <Route path="/forgetpassword">
         <Forgetpassword/>
          </Route>

          <Route path="/choisecat">
         <Choisecat/>
          </Route>

          
          <Route path="/login">
         <Login/>
          </Route>

          <Route path="/signup">
         <Signup/>
          </Route>

          <Route path="/practice2">
         <Practice2/>
          </Route>



          <Route path="/">
          <Main/>
          </Route>
        </Switch>
        
</Router>
<Footer/>

   </>
  )
;}

export default App;
