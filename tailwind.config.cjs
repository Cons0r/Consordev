const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',
	theme: {
		nightwind: {
			colors: {
				primarylight: {
					900: 'primarydark.900'
				},
				primarydark: {
					900: 'primarylight.900'
				},
				bglight: {
					900: 'bgdark.900'
				},
				bgdark: {
					900: 'bglight.900'
				},
			}
		},
		
		extend: {
			colors: {
				transparent: 'transparent',
				primarylight: {
					900: '#92eb92'
				},
				primarydark: {
					900: '#395239'
				},
				bglight: {
					900: '#FFFBE7'
				},
				bgdark: {
					900: '#180A0A'
				},
			}
		},
	},
	
	plugins: [require('nightwind')]
};

module.exports = config;