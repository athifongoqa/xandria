'use client'

import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <div> 
                {/* New Chat */}
                <NewChat />

                <div>
                    {/* Model Selection */}
                </div>

                {/* Map through Chat rows */}
            </div>
        </div>

        {session && <img src={session.user?.image!} alt='' 
        className='h-12 w-12 rounded-full cursor-pointer hover:opacity-50 mx-auto mb-2'
        onClick={() => signOut()}
        />}
    </div>
  );
}

export default SideBar