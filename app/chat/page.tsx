import SideBar from "../../components/SideBar"
import Home from "../page"

type Props = {
    params: {
        id: string
    }
}

function ChatStartPage({ params: { id } }: Props) {
  return (
    <div className="flex">
      <div className='bg-[#1d1e1f] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
        <SideBar />
      </div>
      <div className="flex-col h-screen overflow-y-auto flex-auto justify-between">
        <Home />
      </div>
    </div>
  )
}

export default ChatStartPage