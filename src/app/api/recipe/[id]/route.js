import { db } from "@/db/db";
import { recipes } from "@/db/schema";
import { eq } from "drizzle-orm";

export const GET = async (request, urlParams) => {
  const { id } = await urlParams.params;

  if (!id) {
    return Response.json(
      {
        message: "id is not defined",
      },
      { status: 400 }
    );
  }
  try {
    const singleRecipeData = await db
      .select()
      .from(recipes)
      .where(eq(recipes.id, id));
    if (singleRecipeData.length == 0) {
      return Response.json(
        {
          message: "no data has been found",
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        {
          message: "successfully fetched the data",
          data: singleRecipeData,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: "internal server error",
        error: error?.message,
      },
      { status: 500 }
    );
  }
};
export const DELETE = async (request, urlParams) => {
  const { id } = await urlParams.params;

  try {
    if (!id) {
      return Response.json(
        {
          message: "id is not found",
        },
        { status: 400 }
      );
    }
    await db.delete(recipes).where(eq(recipes.id, id));
    return Response.json(
      {
        message: "deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "internal server error",
        error: error?.message,
      },
      { status: 500 }
    );
  }
};
export const PATCH = async (request, urlParams) => {
  const data = await request.json();

  const { id } = await urlParams.params;

  try {
    if (!data || !id) {
      return Response.json(
        {
          message: "credentials are missing",
        },
        { status: 400 }
      );
    }
    await db.update(recipes).set(data).where(eq(recipes?.id, id));
    return Response.json(
      {
        message: "successfully updated the data",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      message: "internal server error",
      error: error?.message,
    });
  }
};
