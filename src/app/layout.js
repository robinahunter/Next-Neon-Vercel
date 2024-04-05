import './globals.css'
import { Inter } from 'next/font/google'
import NavbarForUser, { NavbarForAnon } from './ui/navbar'
import { getSessionUser } from './lib/session'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nnv-app',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const user = await getSessionUser()
  const loggedIn = user !== null
  const Navbar = loggedIn ? <NavbarForUser /> : <NavbarForAnon />
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen px-10`}>
        {Navbar}
        {children}
      </body>
    </html>
  )
}
