import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';

const BlogPage = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const Blogs = edges
		// .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <Blog blog={edge.node} key={edge.node.id} />);

	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Archive"
			/>

			<div className="px-8 md:px-16 lg:px-20">
				{Blogs.length > 0 ? (
					<section>
						<h2 className="mb-8">Archive</h2>
						<div className="-mx-4 flex flex-wrap">{Blogs}</div>
					</section>
				) : null}
			</div>
		</Layout>
	);
};

export default BlogPage;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt
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
		}
	}
`;
