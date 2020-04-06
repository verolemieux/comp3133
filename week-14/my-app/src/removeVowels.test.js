const removeVowels = require('./removeVowels');

describe("Remove vowels function", () => {
    test("it should remove vowels from a sentence", () => {
        const input = "A dog is a friendly pet if it's trained properly";
        const output = " dg s  frndl pt f t's trnd prprl";

        expect(removeVowels(input)).toMatch(output);
    });
});