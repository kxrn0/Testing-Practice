const reverse_string = require("./reverse_string");

test("reverse a string", () => {
    expect(reverse_string("this is a string")).toBe("gnirts a si siht");
});

test("handle empty strings", () => {
    expect(reverse_string('')).toBe('');
});

test("handle white spaces", () => {
    expect(reverse_string(" ")).toBe(" ");
});