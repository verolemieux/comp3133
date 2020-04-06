const filterFalseValues = require('./filterFalseValues');

describe("Filter false values function", () => {
    test("it should filter objects out that contain a false value", () => {
        const input = [
            { user_id: 1, authenticated: false },
            { user_id: 2, authenticated: true },
            { user_id: 3, authenticated: true },
            { user_id: 4, authenticated: false },
            { user_id: 5, authenticated: true }
        ];
        const output = [{ user_id: 2, authenticated: true }, { user_id: 3, authenticated: true }, { user_id: 5, authenticated: true }];

        expect(filterFalseValues(input)).toEqual(output);
    });
});