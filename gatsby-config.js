module.exports = {
	siteMetadata: {
		title: `Joseph Grant - Developer`,
		description: `Simple portfolio built with Gatsby and Tailwind`,
		author: `@josephgrant`,
		siteUrl: `https://jgrant.co`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: `UA-162697926-1`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-tailwind`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#4dc0b5`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
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
