"use client";
import React, { useContext } from 'react'
import Button from './Button'
import { AddtoCartContext } from '@/app/context/cartContext'

const AddToCartBtn = () => {
    const {state, dispatch} = useContext(AddtoCartContext) 
    const addToCart = () => {
        dispatch({
          type: "Add_to_Cart",
          payload: {id: 'abc', name:'shoes'}
        })
      }
  return (
    <>
      <Button label='Add to cart' onClick={() => addToCart()}/>
    </>
  )
}

export default AddToCartBtn
