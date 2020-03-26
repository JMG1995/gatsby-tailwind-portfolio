import { Link } from 'gatsby';
import React from 'react';
import menuItems from './menu-items';
import Hamburger from '../components/hamburger';

const Header = ({ open, setOpen }) => {
	return (
		<header>
			<div className="flex flex-wrap items-center justify-between container mx-auto px-4 sm:px-0 py-8">
				<Link className="flex items-center no-underline text-white" to="/">
					<span className="font-bold text-xl tracking-tight text-knight-black">
						Joseph Grant
					</span>
				</Link>

				<span
					className="flex items-center md:hidden cursor-pointer z-50 transition"
					onClick={() => setOpen(!open)}
					open={open}>
					<Hamburger />
					{/* <div className="flex flex-col">
						<span
							className={`${
								open ? `bg-white` : `bg-knight-black`
							} rounded-full w-6 h-1 mb-1`}></span>
						<span
							className={`${
								open ? `bg-white` : `bg-knight-black`
							} rounded-full w-6 h-1 mb-1`}></span>
						<span
							className={`${
								open ? `bg-white` : `bg-knight-black`
							} rounded-full w-6 h-1`}></span>
					</div> */}
				</span>

				<nav className="hidden md:flex items-center">
					{menuItems.map(link => (
						<Link
							className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-knight-black hover:text-desire transition"
							key={link.title}
							to={link.route}>
							{link.title}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
