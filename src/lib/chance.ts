/**
 * Rolls a random number inclusively between a min and max.
 * @param min The lower limit of the roll
 * @param max The upper limit of the roll
 */
export function randInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Rolls a random floating point number inclusively between min and max.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} A random float
 */
export function randFloat(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

/**
 * Rolls a 1 in X chance, returning true on successfull rolls.
 * @param upperLimit The upper limit of the roll
 */
export function roll(upperLimit: number): boolean {
	return randInt(1, upperLimit) === 1;
}

export function percentChance(percent: number): boolean {
	return randFloat(0, 100) < percent;
}
