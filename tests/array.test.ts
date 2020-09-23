import { chunk } from '../src/lib/array';

test('GIVEN chunks is a whole number THEN throws TypeError', () => {
	const thrownCall = () => chunk(['one', 'two', 'three'], 5.654635412545);
	expect(thrownCall).toThrow(TypeError);
	expect(thrownCall).toThrow('chunkSize must be an integer.');
});

test('GIVEN chunks is smaller than 1 THEN throws TypeError', () => {
	const thrownCall = () => chunk(['one', 'two', 'three'], 0);
	expect(thrownCall).toThrow(RangeError);
	expect(thrownCall).toThrow('chunkSize must be 1 or greater.');
});

test('GIVEN valid input THEN chunks up array', () => {
	expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([
		[1, 2],
		[3, 4],
		[5, 6]
	]);
});
