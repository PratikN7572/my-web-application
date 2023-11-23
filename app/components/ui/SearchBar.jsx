'use client'
import React from 'react'

const SearchBar = () => {
  return (
    <input type="text" className='border-2' onChange={(e)=>console.log(e.target.value)} />
  )
}

export default SearchBar