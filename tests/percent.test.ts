import { calcPercentOfNum, calcWhatPercent, reduceNumByPercent } from '../src/lib/percent';

test('calcPercentOfNum', () => {
	expect(calcPercentOfNum(10, 100)).toEqual(10);
	expect(calcPercentOfNum(50, 100)).toEqual(50);
	expect(calcPercentOfNum(100, 100)).toEqual(100);
	expect(calcPercentOfNum(105, 100)).toEqual(105);
});

test('calcWhatPercent', () => {
	expect(calcWhatPercent(10, 100)).toEqual(10);
	expect(calcWhatPercent(50, 100)).toEqual(50);
	expect(calcWhatPercent(100, 100)).toEqual(100);
	expect(calcWhatPercent(105, 100)).toEqual(105);
});

test('reduceNumByPercent', () => {
	expect(reduceNumByPercent(100, 10)).toEqual(90);
	expect(reduceNumByPercent(100, 100)).toEqual(0);
	expect(reduceNumByPercent(100, 50)).toEqual(50);
	expect(reduceNumByPercent(100, -1)).toEqual(100);
});
