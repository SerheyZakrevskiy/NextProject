import {
  createRecipe,
  deleteRecipe,
  getRecipes,
  updateRecipe,
} from "@/actions/recipe";
import { IRecipe } from "@/types/recipe";
import { create } from "zustand";

interface IActionResult {
  success: boolean;
  recipe?: IRecipe;
  error?: string;
}

interface IRecipeStore {
  recipes: IRecipe[];
  isLoading: boolean;
  error: string | null;
  loadRecipes: () => Promise<void>;
  addRecipe: (formData: FormData) => Promise<IActionResult>;
  updateRecipe: (id: string, formData: FormData) => Promise<IActionResult>;
  removeRecipe: (id: string) => Promise<void>;
}

export const useRecipeStore = create<IRecipeStore>((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  loadRecipes: async () => {
    set({ isLoading: true, error: null });

    try {
      const result = await getRecipes();

      if (result.success) {
        set({ recipes: result.recipes, isLoading: false });
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is loading recipes" });
    }
  },
  addRecipe: async (formData: FormData) => {
    set({ error: null });

    try {
      const result = await createRecipe(formData);

      if (result.success) {
        set((state) => ({
          recipes: [...state.recipes, result.recipe!],
          isLoading: false,
        }));
        return { success: true, recipe: result.recipe };
      } else {
        set({ error: result.error, isLoading: false });
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is loading recipes", isLoading: false });
      return { success: false, error: "Error is added recipes" };
    }
  },
  updateRecipe: async (id: string, formData: FormData) => {
    set({ error: null });

    try {
      const result = await updateRecipe(id, formData);
      if (result.success) {
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? result.recipe! : recipe
          ),
          isLoading: false,
        }));
        return { success: true, recipe: result.recipe };
      } else {
        set({ error: result.error, isLoading: false });
        return { success: false, error: "Error is updating recipes" };
      }
    } catch (error) {
      console.log("error", error);
      set({ isLoading: false, error: "Error is updating recipes" });
      return { success: false as const, error: "Error is updating recipes" };
    }
  },

  removeRecipe: async (id: string) => {
    set({ error: null });

    try {
      const result = await deleteRecipe(id);

      if (result.success) {
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          isLoading: false,
        }));
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.log("error", error);
      set({ error: "Error is deleting recipes", isLoading: false });
    }
  },
}));
