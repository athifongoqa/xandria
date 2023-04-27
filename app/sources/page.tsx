import Accordion from "@/components/Accordion"

function SourcePage() {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
          <div>
            <Accordion kind={"slack"} />
          </div>
      </div>
    )
  }
  
  export default SourcePage