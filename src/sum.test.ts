import { describe, it, expect } from "vitest";
import { sum } from "./sum.ts";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 1 + 2 to not equal 3", () => {
    expect(sum(1, 2)).not.toBe(4);
  });
});
