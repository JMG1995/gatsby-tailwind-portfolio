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

			<section className="px-20 lg:w-1/2">
				<h2>
					Hi! My name is <span className="text-desire">Joseph.</span>
				</h2>
				<p className="mb-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
					sodales velit, at dignissim tortor. Donec consequat et augue
					vestibulum scelerisque. Donec consectetur orci venenatis nisl
					lobortis, sit amet laoreet lacus eleifend.
				</p>
				<p>
					Interdum et malesuada fames ac ante ipsum primis in faucibus. In at
					est sagittis, feugiat nisl vel, eleifend nibh. Etiam vehicula urna vel
					justo scelerisque aliquet. Nulla tristique tellus vel convallis
					luctus. Mauris nec ultrices ex. Nunc maximus gravida luctus.
				</p>
			</section>
		</Layout>
	);
}

export default IndexPage;
