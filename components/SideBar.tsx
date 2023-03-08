'use client'

import { db } from '../firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import NewChat from './NewChat'
import ChatRow from './ChatRow';

function SideBar() {
  const { data: session } = useSession();
  
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'),
    orderBy('createdAt', 'asc')))

  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <div> 
                <NewChat />

                <div>
                    {/* Model Selection */}
                </div>

                {chats?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
            </div>
        </div>

        {session && <img src={session.user?.image!} alt='' 
        className='h-30 w-30 rounded-full cursor-pointer hover:opacity-50 mx-auto mb-2'
        onClick={() => signOut()}
        />}
    </div>
  );
}

export default SideBar