import Button from '@/app/components/ui/Button'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import LoginButton from './components/LoginButton'

const page = async () => {
  const language = await cookies().get('language')
  if (!language) {
    redirect('/languageSelection')
  }
  return (
    <h1 className='text-blue-600'>
      <LoginButton/>
    </h1>
  )
}

export default page