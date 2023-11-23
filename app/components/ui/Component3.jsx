'use client';

import { CounterContext } from '@/app/context/counterContext'
import React, { useContext } from 'react'

const Component3 = ({ ...props}) => {
    const {state} = useContext(CounterContext)
  return (
    <div>
      <h1>component 3</h1>
      <h1>{state.count}</h1>
    </div>
  )
}

export default Component3
