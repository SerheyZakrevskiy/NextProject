import { prisma } from "@/utils/prisma";
import { success } from "zod";

export async function getRecipes() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });

    return { success: true, recipes };
  } catch (error) {
    console.error("Error fetching recipes", error);
    return { success: false, error: "Error loading recipes" };
  }
}

export async function createRecipe(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("imageUrl") as string | null;
  } catch (error) {
    console.error("Error creating recipes", error);
    return { success: false, error: "Error creating recipes" };
  }
}
