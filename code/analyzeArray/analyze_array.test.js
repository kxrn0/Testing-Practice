const analyze_array = require("./analyze_array");

test("Analyze and empty array", () => {
    expect(analyze_array([1, 2, 3, 4])).toEqual({average : 3, min : 1, max : 4, length : 4});
});

test("Return an empty object for an empty array", () => {
    expect(analyze_array([])).toEqual({});
});