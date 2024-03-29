import './globals.css'
import SessionProvider from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'
import MainNav from '../components/MainNav'

export const metadata = {
  title: 'Xandria Chat',
  description: 'Xandria Chat',
  icons: {
    icon: '../public/code.png',
  },
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

                <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
