import { Link } from "gatsby";
import React, { useState } from "react";

function MobileMenu() {
	return (
		<nav className="bg-space-cadet w-screen h-screen fixed max-w-md right-0 flex flex-col text-2xl text-honeydew p-12 transform-slide-right transition">
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
					className="block mt-4 ml-6 no-underline"
					key={link.title}
					to={link.route}>
					{link.title}
				</Link>
			))}
		</nav>
	);
}

export default MobileMenu;
