import isLeap from "./isLeap.js";

describe("Leap Year", () => {
  it("The number 4 should be considered a leap year", () => {
    expect(isLeap(4)).toEqual(true);
  });
  it("The number 5 shouldn't be considered a leap year", () => {
    expect(isLeap(5)).toEqual(false);
  });
});


