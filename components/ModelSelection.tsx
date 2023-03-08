'use client'
import useSWR from 'swr'
import Select from 'react-select'

const fecthModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
    const { data: models, isLoading } = useSWR('models', fecthModels)
    const { data: model, mutate: setModel } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })
  return (
    <div className='mt-2'>
        <Select
            options={models?.modelOptions}
            isLoading={isLoading}
            onChange={(e) => setModel(e.value)}
            className='mt-2'
            defaultValue={model}
            placeholder={model}
            isSearchable
            menuPosition='fixed'
            classNames={{
                control: () => 'bg-[#434654] border-[#434654]',
            }}
        />
    </div>
  )
}

export default ModelSelection