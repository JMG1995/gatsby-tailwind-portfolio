import React from 'react';
import featuredImage from '../images/blog-image.jpg';
import { Link } from 'gatsby';

const Post = ({ post }) => {
	const {
		excerpt,
		frontmatter: { title, date, categories },
	} = post;

	return (
		<div className="md:w-1/2 lg:w-1/3 px-4 group transform-scale-up transition-quick">
			<Link to={post.frontmatter.path}>
				<img
					alt="this the alt"
					className="rounded-t-lg object-cover"
					src={featuredImage}
				/>
				<div className="px-4 pb-4 rounded-lg shadow-md">
					{categories.map(category => (
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

export default Post;
