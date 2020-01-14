import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
	const [isExpanded, toggleExpansion] = useState(false);
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header>
			<div className="flex flex-wrap items-center justify-between container mx-auto px-4 sm:px-0 py-8">
				<Link className="flex items-center no-underline text-white" to="/">
					<span className="font-bold text-xl tracking-tight text-knight-black">
						Logo
					</span>
				</Link>

				<button
					className="flex items-center md:hidden border border-white cursor-pointer"
					onClick={() => toggleExpansion(!isExpanded)}>
					<div className="flex flex-col mr-2">
						<span className="rounded-full w-6 h-1 bg-knight-black mb-1"></span>
						<span className="rounded-full w-6 h-1 bg-knight-black mb-1"></span>
						<span className="rounded-full w-6 h-1 bg-knight-black"></span>
					</div>
					Menu
				</button>

				<nav className="hidden md:flex items-center">
					{[
						{
							route: `/about`,
							title: `About`
						},
						{
							route: `/blog`,
							title: `Blog`
						},
						{
							route: `/contact`,
							title: `Contact`
						}
					].map(link => (
						<Link
							className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-knight-black"
							key={link.title}
							to={link.route}>
							{link.title}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Header;
