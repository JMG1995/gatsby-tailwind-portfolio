import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Blog = ({ blog }) => {
	const {
		excerpt,
		frontmatter: { title, date, categories },
	} = blog;

	const featuredImgFluid = blog.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<div className="md:w-1/2 lg:w-1/3 mb-12 px-4 group transform-scale-up transition-quick">
			<Link to={blog.frontmatter.path}>
				<Img className="rounded-t-lg object-cover" fluid={featuredImgFluid} />
				<div className="px-4 pb-4 rounded-lg shadow-md">
					{categories.map((category) => (
						<span className="rounded-full text-sm bg-space-cadet px-3 text-honeydew my-3 inline-block mr-2">
							{category}
						</span>
					))}
					<h5 className="group-hover:text-desire transition-quick">{title}</h5>
					<span className="opacity-75 text-sm">{date}</span>
					<p className="my-2">{excerpt}</p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
