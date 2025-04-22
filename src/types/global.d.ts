export {};

declare global {
	interface Window {
		umami?: {
			track: () => void;
		};
	}
}
