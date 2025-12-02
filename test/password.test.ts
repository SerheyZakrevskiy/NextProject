import { describe, it, expect } from "vitest";
import bcrypt from "bcryptjs";
import { saltAndHashPassword } from "../src/utils/password";

describe("saltAndHashPassword", () => {
  it("hashes password and matches bcrypt comparison", async () => {
    const password = "superSecret123";
    const hash = await saltAndHashPassword(password);

    expect(hash).not.toBe(password);
    expect(await bcrypt.compare(password, hash)).toBe(true);
  });

  it("produces different hashes for same password", async () => {
    const hash1 = await saltAndHashPassword("abc123");
    const hash2 = await saltAndHashPassword("abc123");

    expect(hash1).not.toBe(hash2);
  });
});
