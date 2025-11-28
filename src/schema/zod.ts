import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const ingredientSchema = z.object({
  name: z.string().min(1, "name required"),

  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER",
  ]),
  unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILILITERS", "PIECES"]),

  pricePerUnit: z.preprocess((v) => {
    if (v === "" || v === undefined || v === null) return null;
    return v;
  }, z.coerce.number({ error: "the price must be a number" }).min(0, { error: "price must be a positive" }).nullable()),

  description: z.string().optional(),
});
