'use client'

import { setToken } from '@/app/action'
import Button from '@/app/components/ui/Button'
import React from 'react'

const LoginButton = () => {
  return (
    <Button onClick={()=> setToken()} label='login (set token)' />
  )
}

export default LoginButton