import {
  createIngredient,
  deleteIngredient,
  getIngredients,
} from "@/actions/ingredient";
import { IIngredient } from "@/types/ingredient";
import { create } from "zustand";

interface IngredientState {
  ingredients: IIngredient[];
  isLoading: boolean;
  error: string | null;
  loadIngredients: () => Promise<void>;
  addIngredient: (FormData: FormData) => Promise<void>;
  removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>((set) => ({
  ingredients: [],
  isLoading: false,
  error: null,

  loadIngredients: async () => {
    set({ isLoading: true, error: null });

    try {
      const result = await getIngredients();

      if (result.success) {
        set({ ingredients: result.ingredients, isLoading: false });
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is Loading ingredients", isLoading: false });
    }
  },

  addIngredient: async (FormData: FormData) => {
    set({ isLoading: true, error: null });

    try {
      const result = await createIngredient(FormData);

      if (result.success) {
        set((state) => ({
          ingredients: [...state.ingredients, result.ingredient],
          isLoading: false,
        }));
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is Added ingredients", isLoading: false });
    }
  },
  removeIngredient: async (id: string) => {
    set({ isLoading: true, error: null });

    try {
      const result = await deleteIngredient(id);

      if (result.success) {
        set((state) => ({
          ingredients: state.ingredients.filter(
            (ingredient) => ingredient.id !== id
          ),
          isLoading: false,
        }));
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is Added ingredients", isLoading: false });
    }
  },
}));
