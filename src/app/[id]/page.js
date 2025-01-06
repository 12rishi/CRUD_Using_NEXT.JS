import Link from "next/link";

const Singlepage = async ({ params }) => {
  let singleRecipeData;
  const id = params?.id;

  try {
    const fetchSingleRecipe = await fetch(
      `http://localhost:3000/api/recipe/${id}`,
      {
        next: {
          revalidate: 20,
        },
      }
    );

    if (!fetchSingleRecipe.ok) {
      throw new Error("Data cannot be fetched");
    }

    const data = await fetchSingleRecipe.json(); // Await the response JSON parsing
    console.log(data);
    singleRecipeData = data.data[0];
  } catch (error) {
    console.error(error?.message);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixabay.com/photo/2019/05/31/01/53/chowmein-4241265_1280.jpg"
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <Link href="/1/edit">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Edit
                  </button>
                </Link>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-red-600 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {singleRecipeData?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {singleRecipeData?.subname}
            </p>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Recipe Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {singleRecipeData?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
