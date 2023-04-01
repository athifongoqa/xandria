'use client'

import { ChatBubbleLeftRightIcon, ClockIcon, ComputerDesktopIcon, CircleStackIcon, CodeBracketSquareIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useSession, signOut } from 'next-auth/react'

function MainNav() {
    const { data: session } = useSession();
    
    return (
        <div className='p-2 flex flex-col h-screen text-white'>
            <div className='flex-1 space-y-4'>
                <div> 
                    <CodeBracketSquareIcon className="w-8 h-8 mainNavIcon" />
                </div>
                <div> 
                    <hr />
                </div>
                <div> 
                    <ChatBubbleLeftRightIcon className="w-8 h-8 mainNavIcon" />
                </div>
                <div> 
                    <ClockIcon className="w-8 h-8 mainNavIcon" />
                </div>
                <div> 
                    <hr />
                </div>
                <div> 
                    <CircleStackIcon className="w-8 h-8 mainNavIcon" />
                </div>
                <div> 
                    <ComputerDesktopIcon className="w-8 h-8 mainNavIcon" />
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