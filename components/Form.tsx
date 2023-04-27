import React, { useState } from "react";

type FormProps = {
  kind: string
}

function Form({ kind }: FormProps) {
  const [state, setState] = useState({
    name: "",
    apiKey: "",
    startID: ""
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="form-control">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
        </label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="name"
          />
        </div>
        <div className="form-control">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            API Key
        </label>
          <input
            type="text"
            name="apiKey"
            value={state.apiKey}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apiKey" placeholder="apiKey"
          />
        </div>
        <div className="form-control">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start ID
          </label>
          <input
            type="text"
            name="startID"
            value={state.startID}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startID" placeholder="startID"
          />
        </div>
        <br />
        <div className="form-control">
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Save
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit">
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
}

export { Form };