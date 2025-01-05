import { db } from "@/db/db";
import { recipes } from "@/db/schema";
//for get function
export const GET = async () => {
  try {
    const recipesData = await db.select().from(recipes);
    if (recipesData.length > 0) {
      return Response.json(
        {
          data: recipesData,
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          message: "Oops!, no recipes has been founded",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: error?.message,
      },
      { status: 500 }
    );
  }
};
export const POST = async (request) => {
  const data = await request.json();
  try {
    if (data) {
      console.log(data.name);
      const recipeData = await db.insert(recipes).values(data);
      return Response.json(
        {
          message: recipeData,
        },
        { status: 201 }
      );
    } else {
      return Response.json(
        {
          message: "please provide the data",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: error?.message,
      },
      { status: 500 }
    );
  }
};
