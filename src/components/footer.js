import React from "react";

function Footer() {
	return (
		<footer className="text-knight-black">
			<nav className="flex flex-col justify-center md:flex-row md:justify-between container mx-auto py-4 md:py-8 items-center text-base">
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
	);
}

export default Footer;
