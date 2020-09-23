import { randFloat, randInt, roll } from '../src/lib/chance';

test('randInt', () => {
	expect(Number.isInteger(randInt(1, 100))).toEqual(true);
});

test('randFloat', () => {
	expect(Number.isInteger(randFloat(1, 100))).toEqual(false);
});

test('roll', () => {
	expect(roll(1)).toEqual(true);
});
