import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data;
	const {
		frontmatter,
		frontmatter: { categories },
		html,
	} = markdownRemark;

	const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
	return (
		<Layout>
			<div className="blog-post-container w-full md:w-2/3 mx-auto">
				<div className="blog-post">
					<Img className="mb-4" fluid={featuredImgFluid} />
					{categories.map((category) => (
						<span className="rounded-full text-sm bg-space-cadet px-3 text-honeydew my-3 inline-block mr-2">
							{category}
						</span>
					))}
					<h1 className="h3">{frontmatter.title}</h1>
					<span className="opacity-75 mb-6 inline-block">
						{frontmatter.date} by Joseph Grant
					</span>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				categories
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
