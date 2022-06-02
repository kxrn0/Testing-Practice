const capitalize = require("./capitalize");

test("capitalizes the first letter of a string", () => {
    expect(capitalize("this is a string")).toBe("This is a string");
});

test("capitalizes the first letter of a string", () => {
    expect(capitalize("...hi")).toBe("...Hi");
});

test("don't change strings without letters", () => {
    expect("5@!%521").toBe("5@!%521");
});