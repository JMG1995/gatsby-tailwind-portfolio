import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;

	const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
	return (
		<Layout>
			<div className="blog-post-container w-2/3 mx-auto">
				<div className="blog-post">
					<Img className="mb-4" fluid={featuredImgFluid} />
					<h1 className="h3">{frontmatter.title}</h1>
					<span className="opacity-75 mb-6 inline-block">
						{frontmatter.date}
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
