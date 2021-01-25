/**
 * Picks a random item from an array.
 * @param array The array to pick from.
 */
export function randArrItem<T>(array: readonly T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

/**
 * Splits up an array into chunks
 * @param array The array to chunk up
 * @param chunkSize The size of each individual chunk
 */
export function chunk<T>(array: readonly T[], chunkSize: number): T[][] {
	if (chunkSize < 1) throw new RangeError('chunkSize must be 1 or greater.');
	if (!Number.isInteger(chunkSize)) throw new TypeError('chunkSize must be an integer.');
	const clone: T[] = array.slice();
	const chunks: T[][] = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));
	return chunks;
}
