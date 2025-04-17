import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const GetAllCuisines = ({
  cuisines,
  setCuisines,
  setName,
  setDesc,
  setCategory,
  setImage,
  setEditingId,
}) => {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this cuisine?"))
      return;

    try {
      const res = await fetch(`/api/food/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success(`Deleted Successfully`);
        setCuisines((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error(data.error || "Failed to delete.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-md rounded-lg mt-10 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-900">
        All Cuisines
      </h1>
      <div className="space-y-6">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine._id}
            className="grid grid-cols-4 gap-4 bg-blue-950 text-white rounded-xl p-4"
          >
            <div className="col-span-3 space-y-2">
              <h2 className="text-xl font-semibold">{cuisine.name}</h2>
              <p>{cuisine.description}</p>
              <p><strong>Category:</strong> {cuisine.category}</p>
              {cuisine.image && (
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-32 h-32 object-cover rounded"
                />
              )}
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                onClick={() => {
                  setName(cuisine.name);
                  setDesc(cuisine.description);
                  setCategory(cuisine.category);
                  setImage(null);
                  setEditingId(cuisine._id);
                }}
              >
                <CiEdit />
              </button>

              <button
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => handleDelete(cuisine._id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllCuisines;
