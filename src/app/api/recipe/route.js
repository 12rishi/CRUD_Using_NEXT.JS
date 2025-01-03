import { db } from "@/db/db";
import { recipes } from "@/db/schema";

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
