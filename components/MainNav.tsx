'use client'

import { 
    ChatBubbleLeftRightIcon, CircleStackIcon, 
    ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import CodeLogo from '../public/code.png'

function MainNav() {
    const { data: session } = useSession();

    return (
        <div className='p-2 flex flex-col h-screen text-white'>
            <div className='flex-1 space-y-4'>
                <div> 
                <Link href="/">
                    <img src={CodeLogo.src} alt='' className='h-8 w-8' />
                </Link>
                </div>
                <div> 
                    <hr />
                </div>
                <div> 
                <Link href="/chat">
                    <ChatBubbleLeftRightIcon 
                    className="w-8 h-8 mainNavIcon"
                    />
                </Link>
                </div>
                <div> 
                    <hr />
                </div>
                <div> 
                <Link href="/sources">
                    <CircleStackIcon className="w-8 h-8 mainNavIcon" />
                </Link>
                </div>
            </div>
    
            {session && <ArrowLeftOnRectangleIcon 
            className='h-8 w-8 cursor-pointer hover:text-red-700 mx-auto mb-2'
            onClick={() => signOut()}
            />}
        </div>
    );
    
}

export default MainNav