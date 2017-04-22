declare module 'tsubaki' {
	export function tsubakify(fn: (...args: any[]) => void): (...args: any[]) => Promise<any>;
	export function tsubakifyAll(obj: object, suffix?: string): object;
	export function promisify(fn: (...args: any[]) => void): (...args: any[]) => Promise<any>;
	export function promisifyAll(obj: object, suffix?: string): object;
}
