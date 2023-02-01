import { primitiveTypes } from './constants';

/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isObject(input: unknown): input is Record<PropertyKey, unknown> | object {
	return typeof input === 'object' && input ? input.constructor === Object : false;
}

/**
 * Check whether a value is a primitive
 * @param input The input to check
 */
export function isPrimitive(input: unknown): input is string | bigint | number | boolean {
	return primitiveTypes.includes(typeof input);
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(input: unknown): input is Function {
	return typeof input === 'function';
}
