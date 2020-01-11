import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Home"
			/>

			<section className="text-center">
				<h1>This is a heading</h1>
				<h2>This is a heading</h2>
				<h3>This is a heading</h3>
				<h4>This is a heading</h4>
				<h5>This is a heading</h5>
				<h6>This is a heading</h6>
			</section>
		</Layout>
	);
}

export default IndexPage;
