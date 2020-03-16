import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Contact"
			/>
			<section>
				<h2 className="w-1/2 text-center mx-auto">
					I want to hear from <em>you</em>.
				</h2>
				<p className="w-1/3 text-center mx-auto mb-4">
					Don't hesitate to drop me a line if you have any questions, would like
					to work together or even just have a chat.
				</p>
				<form className="mx-auto md:w-1/2 shadow-2xl p-12 rounded-lg">
					<label
						className="block font-bold mb-2 text-xs uppercase"
						htmlFor="name">
						Name
					</label>

					<input
						className="appearance-none block mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded-lg bg-light-grey"
						id="name"
						placeholder="Eg. John Doe"
						type="text"
					/>

					<label
						className="block font-bold mb-2 text-xs uppercase"
						htmlFor="email">
						Email
					</label>

					<input
						className="appearance-none block mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded-lg bg-light-grey"
						id="email"
						placeholder="Eg. johndoe@example.com.au"
						type="email"
					/>

					<label
						className="block font-bold mb-2 text-xs uppercase"
						htmlFor="message">
						Message
					</label>

					<textarea
						className="appearance-none mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded-lg bg-light-grey"
						id="message"
						placeholder="What's on your mind?"
						rows="8"
					/>

					<button className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white">
						Submit
					</button>
				</form>
			</section>
		</Layout>
	);
}

export default ContactPage;
