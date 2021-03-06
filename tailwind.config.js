// See https://tailwindcss.com/docs/configuration for details

module.exports = {
	theme: {
		colors: {
			desire: `#E63946`, // Red
			honeydew: `#F1FAEE`, // Off-White
			'light-blue': `#A8DADC`, // Light Blue
			'queen-blue': `#457B9D`, // Dark Blue
			'space-cadet': `#1D3557`, // Darker Blue
			'knight-black': `#161616`, // Almost Black
			white: `#FFFFFF`, // Pure White
			'light-grey': `#F6F6F6`, // Light Grey
		},
		fontFamily: {
			heading: [`Rubik`],
			body: [`Karla`],
		},
	},
	variants: {
		textColor: [`responsive`, `hover`, `group-hover`],
		opacity: [`hover`, `group-hover`],
	},
	plugins: [],
};
