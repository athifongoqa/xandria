import React, { useState } from "react";
import toast from "react-hot-toast";

type FormProps = {
  kind: string
}

function Form({ kind }: FormProps) {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [startID, setStartID] = useState("");

  const handleSubmit =  async (event: any) => {
    event.preventDefault();
    try {
      const notification = toast.loading('Cooking...')

      let res = await fetch(`${process.env.SCRAPER_BE_URL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: apiKey,
          page_id: startID,
        })
    })
    .then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        toast.success('Voila!', {
          id: notification
      })} else {
        toast.error('Something went wrong', {
          id: notification
          })
      }
    })
      
      setName("");
      setApiKey("");
      setStartID("");
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="bg-[#202123] bg-opacity-90 rounded px-8 pt-6 pb-8 mb-4">
        <div className="form-control">
          <label className="block text-gray-400 text-sm font-bold mb-2 my-1.5" >
            Name
        </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Name of Source"
          />
        </div>
        <div className="form-control">
          <label className="block -scroll- my-1.5 text-gray-400 text-sm font-bold mb-2">
            API Key
        </label>
          <input
            type="password"
            name="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apiKey" placeholder="The API Key of your Notion Integration App"
          />
        </div>
        <div className="form-control">
          <label className="block my-1.5 text-gray-400 text-sm font-bold mb-2">
            Start ID
          </label>
          <input
            type="text"
            name="startID"
            value={startID}
            onChange={(e) => setStartID(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startID" placeholder="e.g. db88b9... (ending of any Notion URL)"
          />
        </div>
        <br />
        
        <div className="form-control">
            <button className="flex-shrink-0 bg-[#202123] border-[#202123] hover:bg-gray-700/50 hover:text-green-400 text-sm border-4 text-white py-1 px-2 rounded-lg" type="submit">
                Save
            </button>
        </div>
      </form>
    </div>
  );
}

export { Form };