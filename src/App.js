import React from 'react';
import './App.css';


import Main from './components/Mainsection';
import Bannercontrol from './redux/reducers/bannercontrol';
import { Banner } from './redux/banner';
import Notfound from './components/notfound';
import Allcards from './components/allcards';
import { Practice } from './components/practice';

function App() {
  return (
    <>
 {/* <Main/> */}
{/* <Notfound/>
<Allcards/> */}
<Practice/>

   </>
  )
;}

export default App;
