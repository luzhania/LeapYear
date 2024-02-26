import isLeap from "./isLeap.js";

describe("Leap Year", () => {
  it("The number 4 should be considered a leap year", () => {
    expect(isLeap(4)).toEqual(true);
  });
  it("The number 5 shouldn't be considered a leap year", () => {
    expect(isLeap(5)).toEqual(false);
  });
  it("The numbers that are not divisible by 4 shouldn't be considered a leap year", () => {
    expect(isLeap(2017)).toEqual(false);
  });
  it("The number 400 should be considered a leap year", () => {
    expect(isLeap(400)).toEqual(true);
  });
  it("The numbers divible by 400 should be considered a leap year, such as 2000 ", () => {
    expect(isLeap(2000)).toEqual(true);
  });
  it("The numbers divible by 100 but not by 400 shouldn't be considered a leap year, such as 1700 ", () => {
    expect(isLeap(1700)).toEqual(false);
  });
  it("The numbers divible by 100 but not by 400 shouldn't be considered a leap year, such as 2100 ", () => {
    expect(isLeap(2100)).toEqual(false);
  });
});


