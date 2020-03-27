import { Link } from 'gatsby';
import React, { useCallback, useEffect } from 'react';
import menuItems from './menu-items';
import Hamburger from '../components/hamburger';

const Header = ({ open, setOpen }) => {
	const escFunction = useCallback(event => {
		const hamburger = document.querySelector(`.ham`);
		if (event.keyCode === 27) {
			setOpen(false);
			if (hamburger.classList.contains(`active`)) {
				hamburger.classList.remove(`active`);
			}
		}
	}, []);

	useEffect(() => {
		document.addEventListener(`keydown`, escFunction, false);

		return () => {
			document.removeEventListener(`keydown`, escFunction, false);
		};
	}, [escFunction]);

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
