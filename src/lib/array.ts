export function randArrItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}
