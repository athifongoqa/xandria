import Accordion from "@/components/Accordion"

function IntegrationPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <div>
          <Accordion kind={"notion"} />
        </div>
    </div>
  )
}

export default IntegrationPage