import {useState} from "react";

function DevCard() {
  const [name, setName] = useState("Tushar Thakur");
  return (
    <div className="p-5 bg-white rounded-xl w-80 shadow-xl">
      <h1 className="text-2xl font-bold">{name}</h1>
      <button onClick={() => setName("let's goo")} className="mt-2 px-3 py-1 bg-gray-800 rounded">
        <span className="text-sm text-gray-400">Change Name</span>
      </button>
      <p className="text-gray-400">Backend Node.js Developer</p>
      <p className="mt-2 text-sm">Learning React 🚀</p>
    </div>
  );
}

export default DevCard;
