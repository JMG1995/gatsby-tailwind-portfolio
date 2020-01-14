import PropTypes from "prop-types";
import React from "react";

import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
	return (
		<div className="flex flex-col font-sans min-h-screen text-gray-900">
			<Header />

			<main className="flex flex-col flex-1 my-12 container mx-auto w-full">
				{children}
			</main>

			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
