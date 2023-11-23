import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <Link href='/postPhoto' className='flex items-center justify-between w-48'>
          <Image src='https://images.unsplash.com/photo-1699378999301-8c88a6a237d9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' width={100}  height={100} />
          <h1>some text  for the image</h1>
    </Link>
  )
}

export default page