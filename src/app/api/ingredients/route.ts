import { NextResponse } from "next/server";
import { ingredientSchema } from "@/schema/zod";
import prisma from "@/utils/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json({ success: true, ingredients });
  } catch {
    return NextResponse.json(
      { success: false, error: "Error loading ingredients" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = ingredientSchema.parse({
      name: body.name,
      category: body.category,
      unit: body.unit,
      pricePerUnit:
        body.pricePerUnit === null || body.pricePerUnit === undefined
          ? null
          : Number(body.pricePerUnit),
      description: body.description,
    });

    const ingredient = await prisma.ingredient.create({
      data: {
        name: validated.name,
        category: validated.category,
        unit: validated.unit,
        pricePerUnit: validated.pricePerUnit,
        description: validated.description,
      },
    });

    return NextResponse.json({ success: true, ingredient }, { status: 201 });
  } catch (error: any) {
    if (error?.issues) {
      return NextResponse.json(
        {
          success: false,
          error: error.issues.map((e: any) => e.message).join(", "),
        },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Error creating ingredient" },
      { status: 500 },
    );
  }
}
