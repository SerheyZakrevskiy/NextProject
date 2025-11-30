export const CATEGORY_OPTIONS = [
  { value: "VEGETABLES", label: "Vegetables" },
  { value: "FRUITS", label: "Fruit" },
  { value: "MEAT", label: "Meat" },
  { value: "DAIRY", label: "Dairy" },
  { value: "SPICES", label: "Spices" },
  { value: "OTHER", label: "Other" },
] as const;

export const UNIT_OPTIONS = [
  { value: "GRAMS", label: "Grams" },
  { value: "KILOGRAMS", label: "Kilograms" },
  { value: "LITERS", label: "Liters" },
  { value: "MILILITERS", label: "Mililiters" },
  { value: "PIECES", label: "Pieces" },
] as const;

export const UNIT_ABBREVIATIONS = [
  { value: "GRAMS", label: "gr" },
  { value: "KILOGRAMS", label: "kg" },
  { value: "LITERS", label: "l" },
  { value: "MILILITERS", label: "ml" },
  { value: "PIECES", label: "count" },
] as const;
