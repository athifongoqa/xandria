import './globals.css'
import SideBar from '../components/SideBar'
import SessionProvider from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'
import MainNav from '../components/MainNav'

export const metadata = {
  title: 'Magnetic Chat',
  description: 'Magnetic Chat',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <div className='flex'> 

                <div className='bg-[#202123]'>
                  <MainNav />
                </div>

                <div className='bg-[#1d1e1f] max-w-xs h-screen overflow-y-auto
                md:min-w-[20rem]'>
                  <SideBar />
                </div>

                <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
