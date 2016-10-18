import { List, Range, Map } from "immutable";
import { double_list, sum_list, double_map, sum_map_with_keyfilter } from "../collections";

describe("calc", () => {
  it("should return double list", () => {
    const list = List.of(1, 2, 3, 4, 5);
    const expected = List.of(2, 4, 6, 8, 10);
    const actual = double_list(list);
    expect(expected.equals(actual)).toBeTruthy();
  });

  it("should return sum of list", () => {
    const list = Range(1, Infinity).take(100).toList();
    const expected = 5050;
    const actual = sum_list(list);

    expect(5050).toBe(sum_list(list));
  });
  it("should return sum of double list", () => {
    const list = Range(1, Infinity).take(5).toList();
    const expected = 2 * (1 + 2 + 3 + 4 + 5);
    const actual = sum_list(double_list(list));

    expect(2 * (1 + 2 + 3 + 4 + 5)).toBe(sum_list(double_list(list)));
  });
  it("should return double Map", () => {
    const numMap = Map({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    const expected = Map({ a: 2, b: 4, c: 6, d: 8, e: 10 });
    const actual = double_map(numMap);

    expect(expected.equals(actual)).toBeTruthy();
  });
  it("should return sum of double Map with key filter", () => {
    const numMap = Map({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    const expected = 2 * (1 + 3 + 5);
    const actual = sum_map_with_keyfilter(
      (k: string) => List.of("a", "c", "e").includes(k),
      double_map(numMap)
    );

    expect(2 * (1 + 3 + 5)).toBe(actual);
  });
});
