import { notEmpty } from '../src';

test('notEmpty', () => {
	let arr = [0, false, 1, 2, 3, 4, null, undefined];
	expect(arr.filter(notEmpty)).toEqual([0, false, 1, 2, 3, 4]);

	expect(notEmpty(undefined)).toBeFalsy();
	expect(notEmpty(null)).toBeFalsy();
	expect(notEmpty(0)).toBeTruthy();
	expect(notEmpty(false)).toBeTruthy();
});
