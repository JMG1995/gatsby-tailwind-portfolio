import { Link } from "gatsby";
import React from "react";
import menuItems from "./menu-items";

const Header = ({ open, setOpen }) => {
	return (
		<header>
			<div className="flex flex-wrap items-center justify-between container mx-auto px-4 sm:px-0 py-8">
				<Link className="flex items-center no-underline text-white" to="/">
					<span className="font-bold text-xl tracking-tight text-knight-black">
						Logo
					</span>
				</Link>

				<button
					className="flex items-center md:hidden border border-white cursor-pointer z-50"
					onClick={() => setOpen(!open)}
					open={open}>
					<div className="flex flex-col mr-2">
						<span className="rounded-full w-6 h-1 bg-knight-black mb-1"></span>
						<span className="rounded-full w-6 h-1 bg-knight-black mb-1"></span>
						<span className="rounded-full w-6 h-1 bg-knight-black"></span>
					</div>
					Menu
				</button>

				<nav className="hidden md:flex items-center">
					{menuItems.map(link => (
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
};

export default Header;
