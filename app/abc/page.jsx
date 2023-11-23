import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"
import SearchBar from "../components/ui/SearchBar"

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return  res.json()
}
 
export default async function Page() {
  const data = await getData()
  const cookie = cookies().get('language').value
  return <main>
    <SearchBar/>
    {
      data.filter(x => x.title === title).map((item, index) => {
        const category = item.category.replace(/[^a-zA-Z0-9]+/g, '');
        return (
          <React.Fragment key={index}>
            <Link href={`/products/${category}/${item.id}/a/v/bv`}>{item.title}</Link>
            <br></br>
          </React.Fragment>
        )
      })
    }
    <h1>selected language: { cookie }</h1>
  </main>
}