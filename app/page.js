import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const token = await cookies().get('token')
  if (!token) {
  await redirect('/login')
  }
  return (
    <main className="">
      <h1>home page</h1>

    </main>
  )
}
