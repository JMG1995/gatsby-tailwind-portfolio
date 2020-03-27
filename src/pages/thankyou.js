import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import mailImage from '../images/mail.svg';

const ThankYouPage = () => {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Contact"
			/>
			<section className="px-4 md:px-0">
				<h2 className="md:w-1/2 text-center mx-auto">
					Thankyou for reaching out.
				</h2>
				<p className="md:w-1/3 text-center text-lg mx-auto mb-4">
					I'll be in touch as soon as I'm available.
				</p>
				<img
					alt="Mail has been sent"
					className="block mx-auto w-3/4 md:w-1/2 px-24 my-12"
					src={mailImage}
				/>
			</section>
		</Layout>
	);
};

export default ThankYouPage;
