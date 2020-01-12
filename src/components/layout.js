import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
	return (
		<div className="flex flex-col font-sans min-h-screen text-gray-900">
			<Header />

			<main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
				{children}
			</main>

			<footer>
				<nav className="flex justify-end max-w-4xl mx-auto p-4 md:p-8 text-sm">
					<a
						className="font-bold text-knight-black mr-4"
						href="https://twitter.com/itsmejgrant"
						rel="noopener noreferrer"
						target="_blank">
						Twitter
					</a>
					<a
						className="font-bold hover:underline text-knight-black"
						href="https://github.com/JMG1995/"
						rel="noopener noreferrer"
						target="_blank">
						GitHub
					</a>
				</nav>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
