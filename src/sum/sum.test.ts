import { it, expect, describe } from "vitest";

import { sum } from "./sum.ts";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
