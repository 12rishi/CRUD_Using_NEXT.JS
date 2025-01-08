"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ recipeId }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/recipe/" + recipeId,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong ");
      }
      router.push("/");
    } catch (error) {
      alert(error?.message);
    }
  };
  return (
    <div className="w-1/2 px-2">
      <button
        onClick={handleDelete}
        className="w-full bg-red-600 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
