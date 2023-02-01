/**
 * Rounds a number to a given precision.
 *
 * @param value The number to be rounded.
 * @param precision The precision of the rounding.
 */
export function round(value: number, precision = 1): number {
	const multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

export function clamp(val: number, min: number, max: number) {
	return Math.min(max, Math.max(min, val));
}

export function scaleNumber(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
