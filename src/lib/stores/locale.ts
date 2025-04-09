import { writable } from 'svelte/store';

// Standard-Sprache: 'de'
export const locale = writable<'de' | 'en'>('de');
