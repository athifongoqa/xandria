import ChatInput from "../../../components/ChatInput"
import Chat from "../../../components/Chat"
import SideBar from "../../../components/SideBar"

type Props = {
    params: {
        id: string
    }
}

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex">
      <div className='bg-[#1d1e1f] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
        <SideBar />
      </div>
      <div className="flex flex-col h-screen overflow-y-auto flex-auto justify-between">
        <Chat chatId={id} />
        <ChatInput chatId={id}/>
      </div>
    </div>
  )
}

export default ChatPage