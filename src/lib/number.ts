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
