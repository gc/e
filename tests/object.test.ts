import { objectEntries, objectKeys, objectValues } from '../src';

const testObject = { 1: 1, 2: 1, 3: 1 };

test('objectKeys', () => {
	expect(objectKeys(testObject)).toEqual(['1', '2', '3']);
});

test('objectValues', () => {
	expect(objectValues(testObject)).toEqual([1, 1, 1]);
});

test('GIVEN valid input THEN chunks up array', () => {
	expect(objectEntries(testObject)).toEqual([
		['1', 1],
		['2', 1],
		['3', 1]
	]);
});
