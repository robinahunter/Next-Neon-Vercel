import Image from "next/image";
import { getSessionUser } from './lib/session'
export default async function Home() {
  const user = await getSessionUser()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15 overflow-hidden">
      <h1 className="text-xl">WELCOME to NEXT | NEON | VERCEL</h1>
      <h3>We are building the future...</h3>
      {user && <div>{user}</div>}
    </main>
  );
}
