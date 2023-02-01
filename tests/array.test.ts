import { chunk, partition, randArrItem, shuffleArr, sumArr, uniqueArr } from '../src/lib/array';

describe('chunk', () => {
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
});

test('randArrItem', () => {
	expect(randArrItem([1, 1, 1])).toEqual(1);
	expect([1, 2, 3, 4, 5]).toContain(randArrItem([1, 2, 3, 4, 5]));
});

test('uniqueArr', () => {
	expect(uniqueArr([1, 1, 1])).toEqual([1]);
	expect([1, 2, 3, 4, 5]).toEqual(uniqueArr([1, 2, 3, 4, 5]));
});

test('sumArr', () => {
	expect(sumArr([5, 5, 5])).toEqual(15);
	expect(sumArr([])).toEqual(0);
});

test('shuffleArr', () => {
	expect(shuffleArr([1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('partition', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const partitioned = partition(arr, (i) => i >= 5);
	expect(partitioned[0]).toEqual([5, 6, 7, 8, 9, 10]);
	expect(partitioned[1]).toEqual([1, 2, 3, 4]);
});
