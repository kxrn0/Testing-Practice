const calculator = require("./calculator");

test("add two numbers", () => {
    expect(calculator.add(1, 2)).toBeCloseTo(3);
});

test("substract two numbers", () => {
    expect(calculator.substract(1, 2)).toBeCloseTo(-1);
});

test("add two floats", () => {
    expect(calculator.add(.1, .2)).toBeCloseTo(.3);
});

test("divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(.5);
});

test("multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBeCloseTo(2);
});

test("divide by zero", () => {
    expect(calculator.divide(1, 0)).toBe(Infinity);
})