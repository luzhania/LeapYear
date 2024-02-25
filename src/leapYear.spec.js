import isLeap from "./isLeap.js";

describe("Leap Year", () => {
  it("The number 4 should be considered a leap year", () => {
    expect(isLeap(4)).toEqual(true);
  });
});


