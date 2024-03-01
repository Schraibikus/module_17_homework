import { definePrime } from "../../utils/definePrime";

describe("tests for definePrime function", () => {
  const simple = 17;
  const complex = 18;
  it("should operate correctly with simple number", () => {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
  }),
    it("should operate correctly with complex number", () => {
      expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    }),
    it("should operate correctly with invalid number", () => {
      expect(definePrime(1001)).toBe("Данные не верны");
    }),
    xit("should operate correctly with invalid number", () => {
      expect(definePrime(0)).toBe("Данные не верны");
    });
});

describe("tests for definePrime function", () => {
  const simple = 17;
  const complex = 18;
  it("should operate correctly with simple, complex, invalid number", () => {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    expect(definePrime(1001)).toBe("Данные не верны");
    expect(definePrime(0)).toBe("Данные не верны");
  });
});
