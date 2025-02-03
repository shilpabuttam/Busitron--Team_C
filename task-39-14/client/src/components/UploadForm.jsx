import { useState } from "react";
import axios from "axios";
import UploadButton from "./UploadBtn";

const UploadForm = ({ refreshContent }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    await axios.post("http://localhost:5000/upload", formData);
    refreshContent();
  };

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">Upload Content</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"/>
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"/>

      <button onClick={handleUpload}>
      <UploadButton />
      </button>
      

    </div>
  );
};

export default UploadForm;
