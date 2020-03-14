import React from 'react';
import blogImage from '../images/blog-image.jpg';
import { Link } from 'gatsby';

const Post = ({ post }) => {
	const { title, date } = post.frontmatter;
	return (
		<div className="w-1/3 px-4">
			<Link to={post.frontmatter.path}>
				<img src={blogImage} alt="this the alt" />
				<h4>{title}</h4>
				<span>{date}</span>
			</Link>
		</div>
	);
};

export default Post;
