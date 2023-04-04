const sum = require('./sum');

test('check if the sum is correct', () => {
	expect(sum(2,3)).toBe(5)
})