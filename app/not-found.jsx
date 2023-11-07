import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <p>Could not find requested link</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}