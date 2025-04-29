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
    if (!window.confirm("Are you sure you want to delete this cuisine?")) return;

    try {
      const res = await fetch(`/api/food/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        toast.success(`Deleted Successfully`);
        setCuisines((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error(data.error || "Failed to delete.");
      }
    } catch (error) {
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
            className="flex flex-col md:flex-row items-center bg-blue-950 text-white rounded-xl p-4 gap-4 shadow"
          >
            {cuisine.image && (
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-28 h-28 object-cover rounded-lg border-2 border-white shadow-md"
              />
            )}

            {/* Details */}
            <div className="flex-1 space-y-2 w-full">
              <h2 className="text-xl font-semibold">{cuisine.name}</h2>
              <p className="text-sm">{cuisine.description}</p>
              <p className="text-xs text-blue-200">
                <strong>Category:</strong> {cuisine.category}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-row md:flex-col gap-2">
              <button
                className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 flex items-center justify-center"
                onClick={() => {
                  setName(cuisine.name);
                  setDesc(cuisine.description);
                  setCategory(cuisine.category);
                  setImage(null);
                  setEditingId(cuisine._id);
                }}
                title="Edit"
              >
                <CiEdit size={20} />
              </button>
              <button
                className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 flex items-center justify-center"
                onClick={() => handleDelete(cuisine._id)}
                title="Delete"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllCuisines;
