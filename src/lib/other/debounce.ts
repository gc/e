export const debounce = <F extends (...args: any[]) => any>(fn: F, waitFor: number) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const debounced = (...args: Parameters<F>) => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(() => fn(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
