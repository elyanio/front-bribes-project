import { dataSet } from "./dataSet";
import { countPack } from "./utils";

describe("Create React app", () => {
  test("testing solution", () => {
    expect(countPack(dataSet)).toBe(2);
  });
  test("testing losing cards", () => {
    const filter = dataSet.filter((f) => f.suit !== "hearts");
    expect(countPack(filter)).toBe(0);
  });
  test("testing losing cards 2", () => {
    const filter = dataSet.splice(0, 4 * 12);
    expect(countPack(filter)).toBe(0);
  });
  test("testing empty cards", () => {
    const filter = [] as Definitions.Cards[];
    expect(countPack(filter)).toBe(0);
  });
});
