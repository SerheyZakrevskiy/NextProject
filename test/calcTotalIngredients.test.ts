import { calcTotalIngredients } from "../src/utils/calcTotalIngredients";

import { describe, expect, it } from "vitest";

describe("calcTotalIngredients", () => {
  it("sums ingredient amounts correctly", () => {
    const ingredients = [{ amount: 2 }, { amount: 3 }, { amount: 5 }];

    expect(calcTotalIngredients(ingredients)).toBe(10);
  });

  it("returns 0 for empty list", () => {
    expect(calcTotalIngredients([])).toBe(0);
  });

  it("handles negative numbers", () => {
    const ingredients = [{ amount: 10 }, { amount: -3 }];
    expect(calcTotalIngredients(ingredients)).toBe(7);
  });
});
