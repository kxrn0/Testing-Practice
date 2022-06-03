const caesar_cipher = require("./caesar_cipher");

test("encrypt a message with a key of five", () => {
    expect(caesar_cipher("this is a string", 5, true)).toBe("ymnx nx f xywnsl");
});

test("decrypt a message with a key of five", () => {
    expect(caesar_cipher("ymnx nx f xywnsl", 5, false)).toBe("this is a string");
});

test("ignore non alpha characters", () => {
    expect(caesar_cipher("This! is! a... STRING!", 5, true)).toBe("Ymnx! nx! f... XYWNSL!");
});