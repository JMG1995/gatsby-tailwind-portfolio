import React from 'react';

import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Contact"
			/>
			<section className="px-4 md:px-0">
				<h2 className="md:w-1/2 text-center mx-auto">
					I want to hear from <em className="text-desire">you</em>.
				</h2>
				<p className="md:w-1/3 text-center mx-auto mb-4">
					Don't hesitate to drop me a line if you have any questions, would like
					to work together or even just have a chat.
				</p>
				<form
					action="/contact"
					className="mx-auto md:w-1/2 shadow-2xl p-12 rounded-lg"
					data-netlify="true"
					method="POST"
					name="contact">
					<label
						className="block font-bold mb-2 text-xs uppercase"
						htmlFor="name">
						Name
					</label>

					<input
						className="appearance-none block mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded-lg bg-light-grey"
						id="name"
						name="name"
						placeholder="Eg. John Doe"
						required
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
						name="email"
						placeholder="Eg. johndoe@example.com.au"
						required
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
						name="message"
						placeholder="What's on your mind?"
						required
						rows="8"
					/>

					<Button text="Send me a message" type="submit" />
				</form>
			</section>
		</Layout>
	);
}

export default ContactPage;
