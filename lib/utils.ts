import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
	return clsx(inputs);
}

export function formatCurrency(amount: number, currency = 'BRL', options?: Intl.NumberFormatOptions): string {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency,
		...options,
	}).format(amount);
}

export function generateUniqueId(prefix = 'id'): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return `${prefix}-${crypto.randomUUID()}`;
	}

	return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function truncateText(text: string, maxLength: number): string {
	if (maxLength <= 0) return '';
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength).trimEnd()}...`;
}

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
	return new Intl.DateTimeFormat('pt-BR', options).format(date);
}

export function debounce<T extends (...args: unknown[]) => void>(
	func: T,
	wait: number,
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | undefined;

	return (...args: Parameters<T>) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => func(...args), wait);
	};
}

export function throttle<T extends (...args: unknown[]) => void>(
	func: T,
	limit: number,
): (...args: Parameters<T>) => void {
	let inThrottle = false;

	return (...args: Parameters<T>) => {
		if (inThrottle) return;

		func(...args);
		inThrottle = true;
		setTimeout(() => {
			inThrottle = false;
		}, limit);
	};
}
