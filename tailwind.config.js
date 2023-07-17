/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}', , './node_modules/flowbite/**/*.js'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				burtons: 'burtons',
			},
			colors: {
				personal: '#ed2537',
				angular: '#dd0031',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
