import React from 'react';
import './App.css';


import Main from './components/Mainsection';
import Bannercontrol from './redux/reducers/bannercontrol';
import { Banner } from './redux/banner';
import Notfound from './components/notfound';
import Allcards from './components/allcards';

function App() {
  return (
    <>
 {/* <Main/> */}
<Notfound/>
<Allcards/>

   </>
  )
;}

export default App;
