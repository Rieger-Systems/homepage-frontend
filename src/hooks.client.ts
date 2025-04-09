import { locale } from '$lib/stores/locale';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const storedLang = localStorage.getItem('lang');

	if (!storedLang) {
		const browserLang = navigator.language.startsWith('en') ? 'en' : 'de';
		locale.set(browserLang);
		localStorage.setItem('lang', browserLang);
	} else {
		locale.set(storedLang as 'de' | 'en');
	}

	return resolve(event);
};
