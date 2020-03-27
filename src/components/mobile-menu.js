import { Link } from 'gatsby';
import React from 'react';
import menuItems from './menu-items';

const MobileMenu = ({ open }) => {
	return (
		<nav
			className={`${
				open ? `transform-slide` : `transform-slide-right`
			} bg-space-cadet w-screen h-screen fixed max-w-md right-0 flex flex-col text-2xl text-honeydew p-12 pt-24 transition z-30`}>
			{menuItems.map(item => (
				<Link
					className="block mt-4 ml-6 no-underline hover:text-light-blue transition"
					key={item.title}
					to={item.route}>
					{item.title}
				</Link>
			))}
		</nav>
	);
};

export default MobileMenu;
