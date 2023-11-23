'use client'
import { AddtoCartContext } from '@/app/context/cartContext'
import React, { useContext } from 'react'

const Cart = () => {
    const {state} = useContext(AddtoCartContext)
  return (
    <div>
      {JSON.stringify(state, null)}
    </div>
  )
}

export default Cart
