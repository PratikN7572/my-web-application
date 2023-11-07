'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/abc')}>go to abc</button><br />
      <Link href='/abc'>go to abc using link</Link>
    </div>
  )
}

export default Page