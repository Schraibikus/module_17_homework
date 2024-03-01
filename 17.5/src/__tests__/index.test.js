import { multiply } from "../index.js";

// test("multiply 1 * 0 to equal 0", () => {
//   const result = multiply(1, 0);
//   expect(result).toBe(0);
// });
describe("test multiply", () => {
  it("multiply 1 * 1 to equal 1", () => {
    const result = multiply(1, 1);
    expect(result).toBe(1);
  }),
    it("multiply 1 * 0 to equal 1", () => {
      const result = multiply(1, 0);
      expect(result).toBe(0);
    });
});

describe("test multiply 2", () => {
  it("multiply 1 * 2 to equal 2", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  }),
    it("multiply 1 * 10 to equal 10", () => {
      const result = multiply(1, 10);
      expect(result).toBe(10);
    });
});
