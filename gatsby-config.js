module.exports = {
	siteMetadata: {
		title: `Joseph Grant Portfolio`,
		description: `Simple portfolio built with Gatsby and Tailwind`,
		author: `@josephgrant`,
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
				icon: `src/images/tailwind-icon.png`,
			},
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `images`,
		// 		path: `${__dirname}/src/images`,
		// 	},
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/src/blog`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				excerpt_separator: `<!-- end -->`,
			},
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				tailwind: true,
				purgeOnly: [`src/css/style.css`],
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Rubik`,
						variants: [`400`, `700`],
					},
					{
						family: `Karla`,
						variants: [`400`, `700`],
					},
				],
			},
		},
		`gatsby-plugin-offline`,
	],
};
