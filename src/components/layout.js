import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from './footer';
import Header from './header';
import MobileMenu from './mobile-menu';

function Layout({ children }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col min-h-screen text-knight-black">
			<Header open={open} setOpen={setOpen} />
			<MobileMenu open={open} />

			<main className="flex flex-col flex-1 my-12 container mx-auto w-full">
				{children}
			</main>

			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
