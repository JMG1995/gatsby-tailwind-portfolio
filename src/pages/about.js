import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import josephImg from '../images/joseph-cropped.jpeg';

const AboutPage = () => {
	return (
		<Layout>
			<SEO
				keywords={[`about`, `web dev`, `perth`, `freelance`]}
				title="About"
			/>
			<section className="px-4 md:px-0 flex justify-around items-center">
				<div className="w-1/2 pr-4">
					<h2>
						A little about <span className="text-desire">me...</span>
					</h2>
					<p>
						My development journey began at the end of 2017 when, after
						completing a degree in Audio Engineering, I realised the field
						wasn't sustainable long-term. After a lot of searching, I discovered
						something I had always been admired - beautiful,
						professional-looking websites - could be a legitimate career choice.
						I knew immediately that it was the right move for me.
					</p>
					<p>
						After grinding out the Frontend Techdegree with Team Treehouse, I
						managed to land myself an internship doing basic Wordpress
						maintenance and updates, as well as working with the Divi theme.
						This internship progressed into a fulltime position, where I
						continued to build bigger websites and manage more clients.
					</p>
					<p>
						In late 2019, I was offered the position at{` `}
						<a
							href="https://hatchet.com.au"
							rel="noopener noreferrer"
							target="_blank">
							Hatchet
						</a>
						, where I am a Frontend Developer. I'm currently focused on building
						out custom themed Wordpress websites and developing internal
						features.
					</p>
				</div>
				<div className="w-1/3">
					<img
						alt="This is me!"
						class="rounded-full shadow-md"
						src={josephImg}
					/>
				</div>
			</section>
		</Layout>
	);
};

export default AboutPage;
