import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';
// import Button from '../components/button';
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
				keywords={[`freelance`, `perth`, `web developer`, `front-end`]}
				title="Home"
			/>

			<div className="px-8 md:px-16 lg:px-20">
				<section className="mb-24 flex flex-col lg:flex-row items-center justify-between">
					<div className="lg:w-1/2">
						<h2>
							Hi! My name is <span className="text-desire">Joseph.</span>
						</h2>
						<p className="mb-3">
							I'm a self-taught Frontend Web Developer based in Perth,
							Australia. <br />I enjoy building clean, fast and responsive
							websites using modern tech stacks.
						</p>
						<p>
							If you're interested in working together, make sure to{' '}
							{/* <Link className="text-desire hover:underline" to="/projects">
								check out my work
							</Link>{' '}
							or{' '} */}
							<Link className="text-desire hover:underline" to="/contact">
								drop me a line.
							</Link>
						</p>
					</div>
					<div className="relative w-1/2 mt-8 lg:mt-0 lg:w-1/3 group">
						<span className="tooltip transition opacity-0 group-hover:opacity-100">
							Hard at work!
						</span>
						<img alt="This is me!" src={code} />
					</div>
				</section>

				{/* {Blogs.length > 0 ? (
					<section className="my-24">
						<h2 className="mb-8">Blog</h2>
						<div className="-mx-4 flex flex-wrap">{Blogs}</div>
						{Blogs.length >= 2 ?? <Button text="Load More" />}
					</section>
				) : null} */}
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
