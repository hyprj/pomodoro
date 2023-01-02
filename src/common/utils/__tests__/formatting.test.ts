import { Time } from "../formatting";

describe("seconds to mm:ss", () => {
  test("0 seconds to 00:00", () => {
    expect(Time.toString(0)).toBe("00:00");
  });
  test("21 seconds to 00:21", () => {
    expect(Time.toString(21)).toBe("00:21");
  });
  test("81 seconds to 01:21", () => {
    expect(Time.toString(81)).toBe("01:21");
  });
  test("120 seconds to 02:00", () => {
    expect(Time.toString(120)).toBe("02:00");
  });
  test("3599 seconds to 59:59", () => {
    expect(Time.toString(3599)).toBe("59:59");
  });
});
