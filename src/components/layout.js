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

			<footer className="bg-space-cadet text-white">
				<nav className="flex flex-col justify-center md:flex-row md:justify-between container mx-auto p-4 md:p-8 items-center text-base">
					<small className="order-2 mt-4 md:mt-0 text-base">
						Joseph Grant 2020 <sup>&copy;</sup>
					</small>
					<div className="flex justify-between md:order-2">
						<a
							className="mr-6 hover:underline"
							href="https://twitter.com/itsmejgrant"
							rel="noopener noreferrer"
							target="_blank">
							Twitter
						</a>
						<a
							className="hover:underline"
							href="https://github.com/JMG1995/"
							rel="noopener noreferrer"
							target="_blank">
							GitHub
						</a>
					</div>
				</nav>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
