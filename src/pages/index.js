import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';
import Button from '../components/button';
import code from '../images/code.svg';

const IndexPage = ({
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
				title="Home"
			/>

			<div className="px-8 md:px-16 lg:px-20">
				<section className="mb-24 flex flex-col lg:flex-row items-center justify-between">
					<div className="lg:w-1/2">
						<h2>
							Hi! My name is <span className="text-desire">Joseph.</span>
						</h2>
						<p className="mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
							sodales velit, at dignissim tortor. Donec consequat et augue
							vestibulum scelerisque. Donec consectetur orci venenatis nisl
							lobortis, sit amet laoreet lacus eleifend.
						</p>
						<p>
							Interdum et malesuada fames ac ante ipsum primis in faucibus. In
							at est sagittis, feugiat nisl vel, eleifend nibh. Etiam vehicula
							urna vel justo scelerisque aliquet. Nulla tristique tellus vel
							convallis luctus. Mauris nec ultrices ex. Nunc maximus gravida
							luctus.
						</p>
					</div>
					<div className="w-1/2 mt-8 lg:mt-0 lg:w-1/3">
						<img alt="This is me!" src={code} />
					</div>
				</section>
				<section className="mt-32 mb-24">
					<h2 className="mb-8">Blog</h2>
					<div className="-mx-4 flex flex-wrap">{Blogs}</div>
					<Button text="Load More" />
				</section>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						categories
					}
				}
			}
		}
	}
`;
