'use client'

import { setCookie } from '@/app/action'
import React from 'react'

const LanguageButton = ({label, ...props}) => {
  return (
      <button className="text-fuchsia-500" onClick={()=>{setCookie(label)}}>{ label }</button>
  )
}

export default LanguageButton