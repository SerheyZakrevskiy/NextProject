export function calcTotalIngredients(ingredients: { amount: number }[]) {
  return ingredients.reduce((sum, item) => sum + item.amount, 0);
}
