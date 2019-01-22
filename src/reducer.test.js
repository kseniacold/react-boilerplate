const counter = require('./reducer');

test('Pass 0 and increment', () => {
    expect(
        counter(0, {type: 'INCREMENT'})
    ).toEqual(1);
});

test('Pass 1 and decrement', () => {
    expect(
        counter(1, {type: 'INCREMENT'})
    ).toEqual(2);
});


test('Pass 1 and decrement', () => {
    expect(
        counter(2, {type: 'DECREMENT'})
    ).toEqual(1);
});


test('Pass 2 and decrement', () => {
    expect(
        counter(2, {type: 'DECREMENT'})
    ).toEqual(1);
});

test('Pass undefined and empty obj', () => {
    expect(
        counter(undefined, {})
    ).toEqual(0);
});


console.log("All tests pass");