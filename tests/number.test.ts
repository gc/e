import { round } from '../src';

test('round', () => {
	expect(round(100.35353, 2)).toEqual(100.35);
	expect(round(0.935235235, 3)).toEqual(0.935);
	expect(round(0.966, 1)).toEqual(1);
	expect(round(1.22, 2)).toEqual(1.22);
});
