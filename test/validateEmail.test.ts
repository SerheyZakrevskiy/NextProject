import { describe, it, expect } from "vitest";
import { validateEmail } from "../src/utils/validateEmail";

describe("validateEmail", () => {
  it("returns true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("returns false for invalid email", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });
});
