import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    

    const allSelectedCards = useSelector((state)=>state.AddToCartReducder)
    console.log('allSelectedCards==>',allSelectedCards)
   
   
//    setarraydata([...arraydata,allSelectedCards])
  

   
  return (
    <>

    </>
  )
}

export default ShoppingCart