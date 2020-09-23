export function entries<T extends Record<PropertyKey, unknown>>(obj: T) {
	return Object.entries(obj) as [keyof T, T[keyof T]][];
}

export function values<T extends Record<PropertyKey, unknown>>(obj: T) {
	return Object.values(obj) as T[keyof T][];
}

export function keys<T extends Record<PropertyKey, unknown>>(obj: T) {
	return Object.keys(obj) as (keyof T)[];
}
