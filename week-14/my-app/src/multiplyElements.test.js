const multiplyElements = require('./multiplyElements');

describe("Multiply elements function", () => {
    test("it should multiply every odd integer by the previous even element", () => {
        const input = [2, 33, 4, 41, 6, 9, 77, 11, 13, 27];
        const output = [66, 164, 54, 462, 66, 78, 162];

        expect(multiplyElements(input)).toEqual(output);
    });
});