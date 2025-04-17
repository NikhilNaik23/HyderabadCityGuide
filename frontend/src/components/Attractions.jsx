import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import GetAllAttractions from "./GetAllAttractions";

const Attractions = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchAttractions = async () => {
    try {
      const res = await fetch("/api/attraction");
      const data = await res.json();
      if (res.ok) setAttractions(data);
      else console.error(data.error);
    } catch (error) {
      console.error("Error fetching attractions:", error.message);
    }
  };

  useEffect(() => {
    fetchAttractions();
  }, []);

  useEffect(() => {
    if (editingId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [editingId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", desc);
    if (image) formData.append("image", image);
  
    const endpoint = editingId
      ? `/api/attraction/update/${editingId}`
      : "/api/attraction";
    const method = editingId ? "PUT" : "POST";
  
    try {
      const res = await fetch(endpoint, {
        method,
        body: formData, // send the FormData, don't stringify
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
      } else {
        toast.success(editingId ? "Attraction Updated" : "Attraction Created");
  
        // Reset form
        setName("");
        setDesc("");
        setImage(null);
        setEditingId(null);
  
        fetchAttractions();
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Network or server error.");
    }
  };
  
  

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white/90 shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          Add an Attraction
        </h2>
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 border border-gray-300 text-gray-900 rounded-md h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
          />
          <button type="submit" className="btn btn-primary">
            {editingId ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <GetAllAttractions
        attractions={attractions}
        setAttractions={setAttractions} 
        setName={setName}
        setDesc={setDesc}
        setImage={setImage}
        setEditingId={setEditingId}
      />
    </>
  );
};

export default Attractions;
