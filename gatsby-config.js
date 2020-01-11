module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Tailwind`,
		description: `Gatsby starter styled with Tailwind`,
		author: `@taylorbryant`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-tailwind`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#4dc0b5`,
				display: `minimal-ui`,
				icon: `src/images/tailwind-icon.png`
			}
		},
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				tailwind: true,
				purgeOnly: [`src/css/style.css`]
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Rubik`,
						variants: [`400`, `700`]
					},
					{
						family: `Karla`,
						variants: [`400`, `700`]
					}
				]
			}
		},
		`gatsby-plugin-offline`
	]
};
