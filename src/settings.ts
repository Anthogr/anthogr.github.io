export const profile = {
	fullName: 'Anthony Gramoullé',
	title: '',
	institute: '',
	author_name: 'Gramoullé', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Continuous integration, continuous deployment', description: 'Design of development and deployment pipelines for Python-based web applications. Version control management (GitHub/GitLab), containerization (Docker), and deployment (Portainer).', field: 'physics' },
		{ title: 'Hardware-software interfacing', description: 'Development of human-machine interface (HMI) control software in C#, using Modbus TCP communication with programmable logic controllers (PLCs) for machine control.', field: 'physics' },
		{ title: 'Instrument development', description: 'Design and implementation of automated imaging instruments tailored to scientific needs. Operational follow-up of equipment: maintenance and performance optimization.', field: 'physics' },
		{ title: 'Knowledge Transfer', description: 'Training and support in the use of developed tools, through meetings and the creation of dedicated documentation websites. Also involved in science outreach events.', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'gramoulle@cerege.fr',
	linkedin: '',
	x: '',
	github: 'https://github.com/Anthogr',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=jn_DHGkAAAAJ&hl=fr',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'emerald', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'sunset', // Default themes are located here: https://daisyui.com/docs/themes/
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Anthony Gramoullé',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: 'favicon.png',
}
