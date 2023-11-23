import React from 'react'
import Component1 from '../components/ui/Component1'
import Component2 from '../components/ui/Component2'
import Component3 from './../components/ui/Component3';
import { CounterContextProvider } from '../context/counterContext';

const Page = () => {

  return (
    <div>
      <CounterContextProvider>
      <Component1 />
      <Component2/>
      <Component3/>
      </CounterContextProvider>
    </div>
  )
}

export default Page
