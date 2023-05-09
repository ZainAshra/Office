import React from 'react'
import HeaderBootstap from './mainheader';
import notfoundimg from '../images/notfoundimg.png'
const Notfound = () => {

    const styles ={
        main :{
            display:"flex",
            height:"100vh",
           
            alignItem:"centre",
            justifyContent: "center",
        },
        img:{
         
            width: "31.25rem",
            height: "31.25rem",
        }

    }
  return (
    <>
        <HeaderBootstap/>
        <div style={styles.main} className='container'>
            <img style= {styles.img}  src={notfoundimg} alt='' className='container'/>
        </div>
    </>
  )
}
export default Notfound;