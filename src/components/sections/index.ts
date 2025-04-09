import ContactDE from './Contact.de.svelte';
import ContactEN from './Contact.en.svelte';

import HeroDE from './Hero.de.svelte';
import HeroEN from './Hero.en.svelte';

import NowDE from './Now.de.svelte';
import NowEN from './Now.en.svelte';

import ValuesDE from './Values.de.svelte';
import ValuesEN from './Values.en.svelte';

import WeBuildDE from './WeBuild.de.svelte';
import WeBuildEN from './WeBuild.en.svelte';

import FooterDE from './Footer.de.svelte';
import FooterEN from './Footer.en.svelte';

export const Sections = {
	de: {
		Contact: ContactDE,
		Hero: HeroDE,
		Now: NowDE,
		Values: ValuesDE,
		WeBuild: WeBuildDE,
		Footer: FooterDE
	},
	en: {
		Contact: ContactEN,
		Hero: HeroEN,
		Now: NowEN,
		Values: ValuesEN,
		WeBuild: WeBuildEN,
		Footer: FooterEN
	}
};
