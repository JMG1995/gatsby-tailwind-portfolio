import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import goneFishin from '../images/404.svg';

function NotFoundPage() {
	return (
		<Layout>
			<SEO title="404: Page not found" />
			<div>
				<h2 className="text-3xl text-center">Sorry, gone fishin'.</h2>
				<p className="text-center">(This page doesn't exist)</p>
				<img
					alt="Ghost getting abducted by aliens"
					className="block mx-auto w-1/2 my-16"
					src={goneFishin}
				/>
			</div>
		</Layout>
	);
}

export default NotFoundPage;
