import { getPercents } from "../getPercents.js";

describe("test getPercents", () => {
  it("getPercents  10 / 100 * 70 to equal 7", () => {
    const result = getPercents(70, 10);
    expect(result).toBe(7);
  }),
    it("getPercents  7 / 100 * 70 to equal 13", () => {
      const result = getPercents(70, 7);
      expect(result).toBe(13);
    }),
    it("getPercents  200 / 100 * 3 to equal 6", () => {
      const result = getPercents(3, 200);
      expect(result).toBe(6);
    });
});
