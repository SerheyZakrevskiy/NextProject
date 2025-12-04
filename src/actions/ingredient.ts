"use server";

import { ingredientSchema } from "@/schema/zod";
import { prisma } from "@/utils/prisma";

import z, { ZodError } from "zod";

export async function createIngredient(formData: FormData) {
  try {
    console.log("formData", formData);

    const data = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      unit: formData.get("unit") as string,
      pricePerUnit: formData.get("pricePerUnit")
        ? parseFloat(formData.get("pricePerUnit") as string)
        : null,
      description: formData.get("description") as string,
    };

    const validatedData = ingredientSchema.parse(data);

    const ingredient = await prisma.ingredient.create({
      data: {
        name: validatedData.name,
        category: validatedData.category,
        unit: validatedData.unit,
        pricePerUnit: validatedData.pricePerUnit,
        description: validatedData.description,
      },
    });
    return { success: true, ingredient };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.issues.map((e) => e.message).join(", ") };
    }
    console.error("Error creating ingredient", error);
    return { error: "Error creating ingredient" };
  }
}

export async function getIngredients() {
  try {
    const ingredients = await prisma.ingredient.findMany();

    return { success: true, ingredients };
  } catch (error) {
    console.error("Error creating ingredient", error);
    return { error: "Error creating ingredient" };
  }
}

export async function deleteIngredient(id: string) {
  try {
    const ingredients = await prisma.ingredient.delete({
      where: { id },
    });

    return { success: true, ingredients };
  } catch (error) {
    console.error("Error delete ingredient", error);
    return { error: "Error delete ingredient" };
  }
}
