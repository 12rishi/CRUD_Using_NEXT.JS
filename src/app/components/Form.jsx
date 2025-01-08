"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = ({ type, id }) => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    subname: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;

    try {
      if (type === "Edit") {
        response = await fetch(`http://localhost:3000/api/recipe/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("http://localhost:3000/api/recipe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to ${type === "Edit" ? "update" : "create"} recipe: ${
            errorData.message || "Unknown error"
          }`
        );
      }

      // Redirect on success
      router.push("/");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">
          {type === "Edit" ? "Edit Recipe" : "Create Recipe"}
        </div>
        <form className="p-8" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Name*"
              required
            />
            <input
              type="text"
              name="subname"
              value={data.subname}
              onChange={handleChange}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="SubName*"
              required
            />
          </div>

          <div className="mt-4">
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              {type === "Edit" ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
