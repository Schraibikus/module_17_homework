import { getMonth } from "../index.js";

describe("test getMonth", () => {
  const validMonth5 = 5;
  const validMonth11 = 11;
  const validMonth12 = 12;
  const invalidMonth = 13;
  const nullMonth = 0;
  it("must work correctly with the existing month", () => {
    expect(getMonth(validMonth5)).toBe("Май");
  }),
    it("must work correctly with the existing month", () => {
      expect(getMonth(validMonth11)).toBe("Ноябрь");
    }),
    it("must work correctly with the existing month", () => {
      expect(getMonth(validMonth12)).toBe("Декабрь");
    }),
    it("must work correctly with a month that does not exist", () => {
      expect(getMonth(invalidMonth)).toBe("Нет месяца под таким номером");
    }),
    it("must work correctly with a month that does not exist", () => {
      expect(getMonth(nullMonth)).toBe("Нет месяца под таким номером");
    });
});
