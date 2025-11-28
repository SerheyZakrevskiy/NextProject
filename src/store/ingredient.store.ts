import { IIngredient } from "@/types/ingredient";
import { create } from "zustand";

interface IngredientState {
  ingredients: IIngredient[];
  isLoading: boolean;
  error: string | null;
  LoadIngredients: () => Promise<void>;
  addIngredient: (FormData: FormData) => Promise<void>;
  removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>;
